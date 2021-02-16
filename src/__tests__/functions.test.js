import {add} from '../utils/functions';

test('add function returns a sum of 2 numbers', () => {
  expect(add(1, 2)).toBe(3)
})

test('add function creates sum from 2 strings which are numeric', () => {
  expect(add('3', '5')).toBe(8)
})

test('add function return NaN if non numbers are passed', () => {
  expect(add('Hello', 'World')).toBeNaN()
})