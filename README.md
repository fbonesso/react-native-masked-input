# react-native-masked-input  [![NPM version](https://img.shields.io/npm/v/react-native-masked-input.svg?style=flat-square)](https://www.npmjs.com/package/react-native-masked-input)

## Install

`npm install react-native-masked-input@latest --save`

## Usage

All you need is to `require` the `react-native-masked-input` module and then use the
`<MaskedInput />` tag.

```javascript
import MaskedInput from 'react-native-masked-input';

<MaskedInput maskType="money" currencySymbol="$" currencySeparator="," />
```

## Props

| Prop | Type | Description | Values |
|---|---|---|---|
|**`maskType`**|String|Type of masked input.|`['phone', 'money']`|
|**`currencySymbol`**|String|Currency symbol when money.|`['$', 'R$', '€', '£']`|
|**`currencySeparator`**|String|Currency separator|`['.', ',']`|

## Roadmap
- [ ] Decimal
- [ ] Zipcode
- [ ] Locales
