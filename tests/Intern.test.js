import Intern from "../lib/Intern.js";

describe("Inter Consructor", () => {
  it("returns an intern", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const school = "stout";
    //act
    const intern = new Intern(name, id, email, school);
    //assert
    expect(intern instanceof Intern).toBe(true);
  });

  it("Has the correct school", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const school = "stout";
    //act
    const intern = new Intern(name, id, email, school);
    //assert
    expect(intern.school).toBe(school);
  });

  it("Has the correct role", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const school = "stout";
    //act
    const intern = new Intern(name, id, email, school);
    expect(intern.role).toBe("Intern");
  });
});
