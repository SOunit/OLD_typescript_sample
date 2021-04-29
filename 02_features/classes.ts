class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car('blue');
car.startDrivingProcess();
