const app = require("../modules/app");

test("must return 8 when 5 and 3 are passed", ()=> {
    expect(app.add(5,3)).toBe(8);
})

test("must return 2 when 5 and 3 are passed", ()=> {
        expect(app.subtract(5,3)).toBe(2);
    })

test("must NOT return 2 when 5 and 3 are passed", ()=> {
        expect(app.subtract(5,3)).not.toBe(3);
    })