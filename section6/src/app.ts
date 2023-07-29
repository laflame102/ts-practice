type Admins = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startedDate: Date;
};

type ElevatedEmployee = Admins & Employee;

const e1: ElevatedEmployee = {
  name: "Bohdan",
  privileges: ["server-creator"],
  startedDate: new Date(),
};

type UnknownEmployee = Admins | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }

  if ("startedDate" in emp) {
    console.log(emp.startedDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed ${speed}`);
};

// moveAnimal({ type: "bird", flyingSpeed: 100 });

const userInput = <HTMLInputElement>document.getElementById("user-input");

userInput.value = "Hi there!";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
};

const fetchUserData = {
  name: "John",
  age: "30",
  job: { rank: "ceo" },
};

console.log(fetchUserData?.job?.rank);

console.log(undefined ?? null);
