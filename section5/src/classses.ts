class Department {
  //   name: string;
  //   street: string;
  static fiscalYear = 2000;
  protected employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
    // this.name = n;
    // this.street = s;
  }

  static createEmployee(name: string) {
    console.log(this.fiscalYear);
    return { name };
  }

  describe(this: Department) {
    console.log("Some text " + this.name + " " + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  getEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReports: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReports = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReports) {
      return this.lastReports;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      return;
    }
    this.addReport(value);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReports = text;
  }

  getReports() {
    console.log(this.reports);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  }
}

const accounting = AccountingDepartment.getInstance();
console.log(accounting);
// const employee1 = Department.createEmployee("Max");
// console.log(employee1);

// const it = new ITDepartment("d1", ["Max", "Anne"]);

// it.addEmployee("Max");
// it.addEmployee("Lisa");
// it.getEmployeeInformation();

// it.describe();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

// accounting.addReport("Something went wrong");
// accounting.getReports();

// accounting.addEmployee("Dmitry");
// accounting.getEmployeeInformation();

// const accountingCopy = {
//   name: "fff",
//   street: "wales",
//   describe: accounting.describe,
// };
// accountingCopy.describe();
