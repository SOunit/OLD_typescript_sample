const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// type alias
type Drink = [string, boolean, number];
const cola: Drink = ['brown', true, 30];
const tea: Drink = ['brown', false, 0];

// object is easier to understand
// so, object appears more than tupple
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
