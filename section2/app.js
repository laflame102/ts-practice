var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result " + num);
};
printResult(add(10, 5));
var combineValues;
combineValues = add;
// combineValues = 8
console.log(add(8, 8));
