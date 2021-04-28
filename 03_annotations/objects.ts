const profile = {
  name: 'john',
  age: 30,
  coords: {
    lat: 0,
    lng: 15,
  },
  pets: {
    cats: 2,
    dogs: 1,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015 syntax with type
const { age }: { age: number } = profile;

// ES2015 syntax to get variable
const {
  pets: { cats, dogs },
} = profile;
console.log(cats);
console.log(dogs);

// ES2015 syntax with type
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
