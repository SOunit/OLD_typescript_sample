interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehible: Vehicle): void => {
  console.log(`Name: ${vehible.name}`);
  console.log(`Year: ${vehible.year}`);
  console.log(`Broken? ${vehible.broken}`);
};

printVehicle(oldCivic);
