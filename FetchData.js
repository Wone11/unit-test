function FetchData(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 100)
}

module.exports = FetchData;