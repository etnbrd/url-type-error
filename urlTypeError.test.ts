import {getURLTypeError} from './index'

test('URL TypeError', () => {
  expect(getURLTypeError()).toBe(true)
})
