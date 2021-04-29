class Vehicle {
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

const vehicle = new Vehicle();

const car = new Car();
car.startDrivingProcess();
