# Fluent UI

![GitHub Workflow Status (master)](https://img.shields.io/github/workflow/status/YanxinTang/fluent-ui/Build/master)
[![codecov](https://codecov.io/gh/YanxinTang/fluent-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/YanxinTang/fluent-ui)
[![npm (scoped)](https://img.shields.io/npm/v/@tyx1703/fluent-ui)](https://www.npmjs.com/package/@tyx1703/fluent-ui)
[![GitHub](https://img.shields.io/github/license/YanxinTang/fluent-ui)](https://github.com/YanxinTang/fluent-ui/blob/master/LICENSE)

## Introduction

A Fluent UI toolkit implements by Vue 2.

## Installation

```sh
yarn add @tyx1703/fluent-ui
npm i @tyx1703/fluent-ui
```

## Usage

### Fully import

```js
import FluentUI from '@/tyx1703/fluent-ui';

Vue.use(FluentUI);
```

### On demand

1. install `babel-plugin-theme-component`

```bash
yarn add -D babel-plugin-theme-component
```

2. edit .babelrc (babel.config.js)

```json
// import style from scss

{
  "plugins": [
    [
      "theme-component", 
      {
        "libraryName": "@tyx1703/fluent-ui",
        "style": true,
        "styleDirectory": "src/themes/fluent-ui",
        "styleExtension": "scss",
      }
    ]
  ]
}

// import style from css
{
  "plugins": [
    [
      "theme-component", 
      {
        "libraryName": "@tyx1703/fluent-ui",
        "style": true,
        "styleDirectory": "dist/fluent-ui",
      }
    ]
  ]
}
```

3. import components in main.js

```js
// main.js
import Vue from 'vue';
import { Button } from '@tyx1703/fluent-ui';

Vue.use(Button);
```

You can check [this file](https://github.com/YanxinTang/fluent-ui/blob/master/components.json) to get more components.

## Contribution

If you are interested in this project, welcome to fork and pull request.

## License

MIT License

Copyright (c) 2018-present, tyx1703