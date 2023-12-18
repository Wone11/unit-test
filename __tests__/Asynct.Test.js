let { FetchData, FetchPromise } = require('../FetchData');

test('data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) { done(error) }
    }
    FetchData(callback);
})

test('Promise resolves Promise done!', () => {
    return expect(FetchPromise()).resolves.toBe('Promise done!');
});

test('promise resolves the seme as above and async ', async () => {
    let data = await FetchPromise();
    expect(data).toBe('Promise done!')
})

/**
 * Below code of snipets for test a local callback function!
 * @returns 
 */
function fetchData() {
    return 'peanut butter'
}

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions('peanut butter');
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});



