export interface Tractor {
    id: number;
    name: string;
    model: string;
    // horsepower: number;
    // transmission: string;
    // weight: number; // in kg
  }


export const deutzTractors: Tractor[] = [
    {
      id: 1,
      name: "Deutz-Fahr 5115 G",
      model: "5115 G",
    //   horsepower: 116,
    //   transmission: "24/24 Powershift",
    //   weight: 4800, 
    },
    {
      id: 2,
      name: "Deutz-Fahr 6145 TTV",
      model: "6145 TTV",
    //   horsepower: 145,
    //   transmission: "Continuously Variable",
    //   weight: 5400, 
    },
    {
      id: 3,
      name: "Deutz-Fahr Agrotron 7250 TTV",
      model: "7250 TTV",
    //   horsepower: 246,
    //   transmission: "Continuously Variable",
    //   weight: 9700, 
    },
    {
      id: 4,
      name: "Deutz-Fahr Agrolux 410",
      model: "Agrolux 410",
    //   horsepower: 85,
    //   transmission: "12/12 Synchro",
    //   weight: 3300,
    },
    {
      id: 5,
      name: "Deutz-Fahr 5080 D",
      model: "5080 D",
    //   horsepower: 75,
    //   transmission: "15/15 Synchro",
    //   weight: 2800, 
    },
    {
      id: 6,
      name: "Deutz-Fahr 9340 TTV Warrior",
      model: "9340 TTV Warrior",
    //   horsepower: 336,
    //   transmission: "Continuously Variable",
    //   weight: 12000, 
    },
  ];
  

  