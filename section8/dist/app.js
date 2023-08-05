"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(constructor);
        console.log(logString);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person...");
    }
};
Person = __decorate([
    WithTemplate("<h1>Hello World</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(t, val) {
        this.title = t;
        this._price = val;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("click", (evt) => {
    evt.preventDefault();
    const titleEl = document.querySelector("#title");
    const priceEl = document.querySelector("#price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const course = new Course(title, price);
    console.log(course);
});
