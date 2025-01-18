import { APIGatewayProxyEventV2, APIGatewayProxyResult } from "aws-lambda";
import { Tractor, deutzTractors } from "./deutz";

const tractors: Tractor[] = [...deutzTractors];

function getTractors(): Tractor[] {
  return tractors;
}

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResult> => {
  console.log("Event received:", JSON.stringify(event));

  try {
    const path = event.rawPath; 
    const queryParams = event.queryStringParameters || {};

    if (path.endsWith("/machinery")) {
      console.log("Path matched:", path);

      let filteredTractors = getTractors();

     
      if (queryParams.name) {
        filteredTractors = filteredTractors.filter((tractor) =>
          tractor.name.toLowerCase().includes(queryParams.name!.toLowerCase())
        );
      }
      if (queryParams.model) {
        filteredTractors = filteredTractors.filter((tractor) =>
          tractor.model.toLowerCase().includes(queryParams.model!.toLowerCase())
        );
      }

      return {
        statusCode: 200,
        body: JSON.stringify(filteredTractors),
        headers: { "Content-Type": "application/json" },
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Route not found" }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
      headers: { "Content-Type": "application/json" },
    };
  }
};


