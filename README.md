Indent
======

Indents a string.

## Install

```
npm install indent
```

## Usage

```js
var ident = require('indent')

indent('hello\nworld')
// => '  hello\n  world'

// specify amount
indent('hello\nworld', '    ')
// => '    hello\n    world'
```