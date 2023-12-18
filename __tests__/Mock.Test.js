test('Mock implimentations', () => {
    const mock = jest.fn(x => 50 + x);
    expect(mock(0)).toBe(50);
    expect(mock(50)).toBe(100);
    expect(mock(1)).toBe(51);
    expect(mock(-50)).toBe(0);
})

/**
 * Spying on the return value 
 */
test('Spying on the objejct', () => {
    const Video = {
        Play() {
            return true;
        },
    };
    const spy = jest.spyOn(Video, 'Play');
    Video.Play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})