type ResponseBody = {
    [key: string]: any; 
    message?: string;   
};

export function sendResponse(
    code: number, 
    response: Record<string, any>, 
    message: string | null = null
): {
    statusCode: number;
    headers: Record<string, string>;
    body: string;
} {
    const responseBody: ResponseBody = {
        ...response,
        ...(message && { message })
    };

    return {
        statusCode: code,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(responseBody),
    };
}
