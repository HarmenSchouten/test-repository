import { test } from 'node:test'
import assert from 'node:assert/strict'
import { greet } from '../src/greet.ts'

test('greets the world by default', () => {
  assert.equal(greet(), 'Hello, world!')
})

test('greets a name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!')
})

test('treats a blank name as no name', () => {
  assert.equal(greet('   '), 'Hello, world!')
})

test('greets two names', () => {
  assert.equal(greet('Ada', 'Grace'), 'Hello, Ada and Grace!')
})

test('greets three names without an Oxford comma', () => {
  assert.equal(greet('Ada', 'Grace', 'Linus'), 'Hello, Ada, Grace and Linus!')
})

test('trims names and drops blank ones', () => {
  assert.equal(greet('  Ada ', '', '   '), 'Hello, Ada!')
})

test('greets the world when all names are blank', () => {
  assert.equal(greet('', '   '), 'Hello, world!')
})

test('capitalises a lower-case name', () => {
  assert.equal(greet('ada'), 'Hello, Ada!')
})

test('capitalises each of several names', () => {
  assert.equal(greet('ada', 'grace'), 'Hello, Ada and Grace!')
})

test('capitalises a non-ASCII first letter', () => {
  assert.equal(greet('élodie'), 'Hello, Élodie!')
})

test('leaves the rest of the name as typed', () => {
  assert.equal(greet('McDonald'), 'Hello, McDonald!')
  assert.equal(greet("o'brien"), "Hello, O'brien!")
})
