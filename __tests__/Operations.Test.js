const Operations = require("../Operations");
const Addition = require("../Sum");
const operation = new Operations(12, 0);
const moduleTest = new Operations(56, 50);

test('adds 50 + 12 to  equal 62', () => {
    expect(Addition(50, 12)).toBe(62);
})

test('additional operation', () => {
    expect(operation.Add()).toBe(12);
});

test('Multiplication Operatios ', () => {
    expect(operation.Multiply()).toEqual(0)
});

test('Devision Operations', () => {
    expect(operation.Devide()).toBe('Zero devision Error Occured');
});

test('Modulo of 56 to 50 is 6', () => {
    expect(moduleTest.Modulo()).toBe(6);
})

test('five square equals twenty five', () => {
    expect(5 * 5).toBe(25);
});

test('Object assignment', () => {
    let data = { one: 1 }
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

//test one for null value 
test('null and zero value data to be falsy', () => {
    let data = null;
    let zeroData = 0;
    expect(data).toBeFalsy();
    expect(zeroData).toBeFalsy();
});
