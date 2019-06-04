# Get relative luminance

[![Greenkeeper badge](https://badges.greenkeeper.io/misund/get-relative-luminance.svg)](https://greenkeeper.io/)

`get-relative-luminance` calculates a CSS color's relative luminance based on
[this definition from W3C](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef).

It doesn't handle transparency as of yet.

## Installation
```
$ npm install get-relative-luminance
```

## Usage
```js
import getRelativeLuminance from 'get-relative-luminance';

getRelativeLuminance('rgb(255, 255, 255)'); // 1
getRelativeLuminance('white'); // 1
getRelativeLuminance('hsl(0, 0%, 0%)'); // 0
```

## Signature
`(color: string, { ignoreTransparency:boolean = false } = {}) => number`

## Contributing
I appreciate your issues and PRs [on Github](https://github.com/misund/get-relative-luminance)!

### Testing
```
yarn build && yarn test
```

### Releasing
This project uses [np](https://github.com/sindresorhus/np).
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
