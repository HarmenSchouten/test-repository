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
