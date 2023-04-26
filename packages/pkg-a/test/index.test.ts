import { getName } from '../src/index'

test('getName', () => {
    expect(getName()).toBe('pkg-a')
})
