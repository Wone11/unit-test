
const IsNumber = (input) => {
    if (typeof (input) !== 'number') {
        console.log("Invalid Daata types !");
        throw new Error("Invalid Input Data Type")
    }
    else {
        return input;
    }
}

module.exports = IsNumber;