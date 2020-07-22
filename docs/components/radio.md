# Radio 单选框


## v-model 绑定

::: demo

```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      <Radio
        v-for="city in cities"
        :key="city"
        :label="city"
        v-model="checkedCity"
      >{{ city }}</Radio>
      <Radio label="杭州" v-model="checkedCity" disabled>杭州</Radio>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      选中的城市：{{ checkedCity }}
    </Col>
  </Row>
</template>
<script>
  export default {
    data() {
      return {
        cities: ['北京', '上海', '广州', '深圳'],
        checkedCity: '北京',
      };
    }
  }
</script>
```
:::

## 属性

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| disabled | 是否禁用 | Boolean | — | false |
| label | v-model 绑定数组类型时，Radio 表示的值 | String, Number | — |  |
| value | Radio 绑定的值 | String, Number | — | |

## 事件

| 参数  | 说明 | 回调参数 |
|-------|------ |------|
| change | Radio 状态变化后的事件 | function (newValue: 选中的 Radio 的值) |


## 单组件导入

```js
import { Radio } from '@tyx1703/fluent-ui/Radio';
```