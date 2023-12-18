test('Mock implimentations', () => {
    const mock = jest.fn(x => 50 + x);
    expect(mock(0)).toBe(50);
    expect(mock(50)).toBe(100);
    expect(mock(1)).toBe(51);
    expect(mock(-50)).toBe(0);
})