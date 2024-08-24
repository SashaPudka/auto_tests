import statusPlayer  from '../statusPlayer'

test('status for player', () => {
    expect(statusPlayer({name: 'Маг', health: 90})).toBe('healthy');
    expect(statusPlayer({name: 'Маг', health: 52})).toBe('healthy');
    expect(statusPlayer({name: 'Маг', health: 44})).toBe('wounded');
    expect(statusPlayer({name: 'Маг', health: 16})).toBe('wounded');
    expect(statusPlayer({name: 'Маг', health: 5})).toBe('critical');
})
