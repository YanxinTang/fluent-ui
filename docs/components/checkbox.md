# Checkbox 复选框

## 基本用法

::: demo

```html
<template>
  <Checkbox />
  <Checkbox checked/>
  <Checkbox disabled/>
  <Checkbox checked disabled/>
</template>
```
:::

## 带标签的Checkbox

::: demo

```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      <Checkbox>默认未选中的Checkbox</Checkbox>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Checkbox checked>默认选中的Checkbox</Checkbox>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Checkbox disabled>默认未选中且禁用的Checkbox</Checkbox>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Checkbox checked disabled>默认选中且禁用的Checkbox</Checkbox>
    </Col>
  </Row>
</template>
```
:::

## v-model 绑定

::: demo 绑定 Boolean

```html
<template>
  <Checkbox v-model="checked">{{ checked ? '选中' : '未选中'}}</Checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
      };
    }
  }
</script>
```
:::

::: demo 绑定数组

```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      <Checkbox
        v-for="city in cities"
        :key="city"
        :label="city"
        v-model="checkedCities"
      >{{ city }}</Checkbox>
      <Checkbox label="杭州" v-model="checkedCities" disabled>杭州</Checkbox>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      选中的城市：{{ checkedCities.join() }}
    </Col>
  </Row>
</template>
<script>
  export default {
    data() {
      return {
        cities: ['北京', '上海', '广州', '深圳'],
        checkedCities: [],
      };
    }
  }
</script>
```
:::

## 属性

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| checked | 默认是否选中（v-model 绑定值时，此属性无效） | Boolean | — | false |
| disabled | 是否禁用 | Boolean | — | false |
| label | v-model 绑定数组类型时，Checkbox 表示的值 | String, Number | — |  |
| value | Checkbox 绑定的值 | Boolean, Array | — | |

## 事件

| 参数  | 说明 | 回调参数 |
|-------|------ |------|
| change | Checkbox 状态变化后的事件 | function (newValue) |


## 单组件导入

```js
import { Checkbox } from 'fluent-ui/Checkbox';
```