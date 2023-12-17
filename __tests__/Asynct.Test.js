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