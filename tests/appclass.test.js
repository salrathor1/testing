const appclass = require("../modules/appclass");

describe("Increase and decrease of health value", () => {
    test("should increase health by 1", () => {
    expect(appclass.ann.health).toBe(100);
    appclass.ann.increaseHealth();
    expect(appclass.ann.health).toBe(101);
    })
    test("should decrease health by 1", () => {
    expect(appclass.ann.health).toBe(101);
    appclass.ann.decreaseHealth();
    expect(appclass.ann.health).toBe(100);
    })
   })
   

// test("should increase health by 1", () => {
//  expect(appclass.ann.health).toBe(100);
//  appclass.ann.increaseHealth();
//  expect(appclass.ann.health).toBe(101);
// })

// test("should decrease health by 1", () => {
//     expect(appclass.ann.health).toBe(100);
//     appclass.ann.decreaseHealth();
//     expect(appclass.ann.health).toBe(99);
//    })

//    test("namecheck for Ann", () => {
//     expect(appclass.ann.nameCheck("Ann")).toContain("Ann");
//    })

// test("should contain Raeesa", () => {
//     expect(appclass.testNames).toContain("Raeesa");
// });