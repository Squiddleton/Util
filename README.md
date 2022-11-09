# Util

A collection of utility functions for JavaScript an TypeScript projects.

## Usage

Install this scoped package by running the following command in your terminal:

```sh-session
npm install @squiddleton/util
```

All of the package's functions are top-level exports. For example:

```ts
import { normalize } from '@squiddleton/util';

// Prints "fooandbar"
console.log(normalize('Foo, & BAR!'));
```

Please read [the index file](src/index.ts) for all functions, typings, and examples.