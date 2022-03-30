const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))
test('long test', async () => {
    await delay(1000);
    expect(true).toBe(true);
})
