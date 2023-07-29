// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// let user1: Greetable;

// user1 = {
//   name: "Max",
//   //   age: "30",
//   greet(phrase: string) {
//     console.log(this.name + phrase);
//   },
// };

let user1: Greetable;

user1 = new Person("Max");

user1.greet("is welcome  ");
