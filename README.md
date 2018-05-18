# Get relative luminance

`get-relative-luminance` calculates a CSS color's relative luminance based on
[this definition from W3C](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef).

It doesn't handle transparency as of yet.

### Installation
```
$ npm install get-relative-luminance
```

### Usage
```js
import getRelativeLuminance from 'get-relative-luminance';

getRelativeLuminance('rgb(255, 255, 255)'); // 1
getRelativeLuminance('white'); // 1
getRelativeLuminance('hsl(0, 0%, 0%)'); // 0
```

### Signature
`(color: string, { ignoreTransparency:boolean = false } = {}) => number`
