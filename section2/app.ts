const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result " + num);
};

printResult(add(10, 5));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 8

console.log(add(8, 8));
