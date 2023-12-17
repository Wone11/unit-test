class Operations {
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    Add() {
        return this.numberOne + this.numberTwo;
    }

    Multiply() {
        return this.numberOne * this.numberTwo;
    }

    Devide() {
        try {
            if (this.numberTwo === 0) throw Error("Devidend can't be a zero")

            return this.numberOne / this.numberTwo;
        } catch (error) {
            console.log('Zero devision Error : ' + error);
        }
    }
}

module.exports = Operations