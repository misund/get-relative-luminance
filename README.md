# Get relative luminance

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=misund/get-relative-luminance)](https://dependabot.com)

`get-relative-luminance` calculates a CSS color's relative luminance based on
[this definition from W3C](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef).

It doesn't handle transparency as of yet.

## Installation

```bash
$ npm install get-relative-luminance
```

## Usage

```js
import getRelativeLuminance from 'get-relative-luminance'

getRelativeLuminance('rgb(255, 255, 255)') // 1
getRelativeLuminance('white') // 1
getRelativeLuminance('hsl(0, 0%, 0%)') // 0
```

## Signature

```ts
;(
  color: string,
  {
    ignoreTransparency,
  }?: {
    ignoreTransparency?: boolean | undefined
  },
) => number
```

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
