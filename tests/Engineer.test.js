import Engineer from "../lib/Engineer.js";

describe("Engineer Consructor", () => {
  it("returns an engineer", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const github = "megsra17";
    //act
    const engineer = new Engineer(name, id, email, github);
    //assert
    expect(engineer instanceof Engineer).toBe(true);
  });

  it("Has the correct github", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const github = "megsra17";
    //act
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.github).toBe(github);
  });

  it("Has the correct role", () => {
    //arrange
    const name = "BoB";
    const id = "35";
    const email = "megsra@wi.rr.com";
    const github = "megsra17";
    //act
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.role).toBe("Engineer");
  });
});
