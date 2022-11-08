import Manager from "../lib/Manager.js";

describe("Manager Consructor", () => {
  it("returns a manager", () => {
    //arrange
    const name = "BoB";
    const id = 35;
    const email = "megsra@wi.rr.com";
    const office = 15;
    //act
    const manager = new Manager(name, id, email, office);
    //assert
    expect(manager instanceof Manager).toBe(true);
  });

  it("Has the correct office", () => {
    //arrange
    const name = "BoB";
    const id = 35;
    const email = "megsra@wi.rr.com";
    const office = 15;
    //act
    const manager = new Manager(name, id, email, office);
    //assert
    expect(manager.office).toBe(office);
  });

  it("Has the correct role", () => {
    //arrange
    const name = "BoB";
    const id = 35;
    const email = "megsra@wi.rr.com";
    const office = 15;
    //act
    const manager = new Manager(name, id, email, office);
    expect(manager.role).toBe("Manager");
  });
});
