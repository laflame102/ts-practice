"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    static createEmployee(name) {
        console.log(this.fiscalYear);
        return { name };
    }
    describe() {
        console.log("Some text " + this.name + " " + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2000;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReports = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReports) {
            return this.lastReports;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            return;
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
