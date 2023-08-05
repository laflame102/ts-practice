function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(constructor);
    console.log(logString);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("loggig - person")
@WithTemplate("<h1>Hello World</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person...");
  }
}

const pers = new Person();
console.log(pers);

// ----

function Log(target: any, propertyName: string) {
  console.log(target);
  console.log(propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, val: number) {
    this.title = t;
    this._price = val;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

class Course {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector("form");

form?.addEventListener("click", (evt) => {
  evt.preventDefault();

  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const priceEl = document.querySelector("#price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const course = new Course(title, price);
  console.log(course);
});
