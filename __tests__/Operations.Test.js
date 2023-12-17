const Operations = require("../Operations");
const Addition = require("../Sum");
const operation = new Operations(12, 50);


test('adds 50 + 12 to  equal 62', () => {
    expect(Addition(50, 12)).toBe(62);
})

test('additional operation', () => {
    expect(operation.Add()).toBe(62);
})

test('MultiplicationOperatios ', () => {
    expect(operation.Multiply()).toBe(600)
})