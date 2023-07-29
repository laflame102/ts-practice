"use strict";
var _a;
const e1 = {
    name: "Bohdan",
    privileges: ["server-creator"],
    startedDate: new Date(),
};
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
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
const userInput = document.getElementById("user-input");
userInput.value = "Hi there!";
const errorBag = {
    email: "Not a valid email!",
};
const fetchUserData = {
    name: "John",
    age: "30",
    job: { rank: "ceo" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.rank);
console.log(undefined !== null && undefined !== void 0 ? undefined : null);
