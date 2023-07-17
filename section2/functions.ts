const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(10, 5));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 8

console.log(add(8, 8));

addAndHandle(10, 15, (result) => console.log(result));
