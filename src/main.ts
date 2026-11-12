import { greet, shout } from './greet.ts'

const args = process.argv.slice(2)
const loud = args.includes('--shout')
const names = args.filter((a) => a !== '--shout')

console.log(loud ? shout(...names) : greet(...names))
