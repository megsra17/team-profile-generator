import Employee from "../lib/Employee.js";

describe("Employee Consructor", () => {
  it("returns an employee name", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";

    //act
    const employee = new Employee(name, id, email);
    //assert
    expect(employee.name).toBe(name);
  });

  it("Has correct id", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    //act
    const employee = new Employee(name, id, email);
    expect(employee.id).toBe(id);
  });

  it("Has the correct email", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    //act
    const employee = new Employee(name, id, email);
    expect(employee.email).toBe(email);
  });
});
