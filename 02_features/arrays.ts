const anyArray = [];

const carMakers = ['ford', 'toyota', 'chevy'];
const stringArray: string[] = [];

const carsMadeBy = [['ford'], ['toyota'], ['chevy']];
const carsByMake: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2021-10-10');
importantDates.push(new Date());
importantDates.push(100);
