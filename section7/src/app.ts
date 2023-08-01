// const names: Array<string> = [];
// // names[0].split(' ')

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("This is done");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: "30" });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there"));

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Mane");
textStorage.removeItem("Max");
// console.log(textStorage.getItem());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
