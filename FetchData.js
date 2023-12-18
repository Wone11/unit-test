function FetchData(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 100)
}

function FetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise done!')
        }, 100)
    })
}

module.exports = {
    FetchData,
    FetchPromise
};