# @typhoon41/eslint-vue-config

> Strict, shareable config for TS/VUE projects usint ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

To see the rules that this config uses, please read the [config itself](./index.js).

## Installation

```
$ npm install --save-dev eslint @typhoon41/eslint-vue-config
```

## Usage

Once the `@typhoon41/eslint-vue-config` package is installed, you can use it by specifying `@typhoon41/eslint-vue-config` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@typhoon41/eslint-vue-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

Apache-2 © Nikola Dragićević