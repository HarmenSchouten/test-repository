import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { shout } from '../src/greet.ts'

function cli(...args: string[]): string {
  return execFileSync(process.execPath, ['src/main.ts', ...args], {
    encoding: 'utf8',
  }).trim()
}

test('shout upper-cases the greeting', () => {
  assert.equal(shout('Ada', 'Grace'), 'HELLO, ADA AND GRACE!')
  assert.equal(shout(), 'HELLO, WORLD!')
})

test('cli --shout before names', () => {
  assert.equal(cli('--shout', 'Ada', 'Grace'), 'HELLO, ADA AND GRACE!')
})

test('cli --shout among names', () => {
  assert.equal(cli('Ada', '--shout', 'Grace'), 'HELLO, ADA AND GRACE!')
})

test('cli --shout alone', () => {
  assert.equal(cli('--shout'), 'HELLO, WORLD!')
})

test('cli without --shout', () => {
  assert.equal(cli('Ada'), 'Hello, Ada!')
})
