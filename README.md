# test-repository

A TypeScript hello world with no dependencies and no build step. Node 24 runs the `.ts` files directly ([type stripping](https://nodejs.org/api/typescript.html)), so there's nothing to install.

```sh
npm start          # Hello, world!
npm start -- Ada   # Hello, Ada!
npm start -- ada   # Hello, Ada! (first letter is capitalised)
npm start -- Ada Grace Linus   # Hello, Ada, Grace and Linus!
npm test           # node --test, runs test/*.test.ts
```

Type stripping removes the types without checking them. It also allows only TypeScript that can be erased: no `enum`, `namespace` or parameter properties, and imports name the `.ts` file. `tsconfig.json` sets the same rules for editors.
