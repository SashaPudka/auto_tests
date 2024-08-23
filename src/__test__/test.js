import statusPlayer  from '../statusPlayer'

// test('status for player', () => {
//     const result = 4
//     expect(result).toBe(4)
// })

test('status for player', () => {
    const item = {name: 'Маг', health: 90}
    const result = statusPlayer(item)

    expect(result).toBe('healthy')
})
