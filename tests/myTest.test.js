const myTest = require("../modules/myTest");

test("add 2 and 3 - return 5", ()=> {
    expect(myTest.add(5,3)).toBe(8);
})

test("Array to contain Raeesa", ()=> {
    expect(myTest.array).toContain("Raeesa");
})