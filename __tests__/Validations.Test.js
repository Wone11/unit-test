const IsNumber = require("../CheckValidations");

test('check input value is number', () => {
    expect(() => {
        IsNumber("Solomon");
    }).toThrow()
})