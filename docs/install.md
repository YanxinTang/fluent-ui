# 安装

# Yarn / npm

```sh
yarn add @tyx1703/fluent-ui
npm i @tyx1703/fluent-ui
```

# CDN

暂时还不支持

# 注意

Fluent UI 通过监听事件来决定是否显示 `focus` 的样式，事件的监听并不是自动化的，需要手动绑定和解除。

以 `vue-cli` 创建的应用为例，在 `App.vue` 文件中

```js
import Vue from 'vue';
import { bindFocusEvents } from '@tyx1703/fluent-ui';

const unbindFocusEvents = bindFocusEvents();

export default {
  name: 'App',
  beforeDestroy() {
    unbindFocusEvents();
  }
}
```
