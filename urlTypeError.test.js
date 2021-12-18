const {getURLTypeError} = require('./index')

test('URL TypeError', () => {
  expect(getURLTypeError()).toBe(true)
})
