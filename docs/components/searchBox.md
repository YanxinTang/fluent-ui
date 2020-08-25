# SearchBox 搜索框

## 基础用法

::: demo
```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      <SearchBox placeholder="Search" v-model="input" @escape="input = ''"/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <SearchBox placeholder="Search" v-model="input" disableAnimation @escape="input = ''"/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <SearchBox placeholder="Search" v-model="input" underlined @escape="input = ''"/>
    </Col>
  </Row>
</template>


<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

## 带下划线的搜索框

::: demo
```html
<Row gutter=".5rem 0">
  <Col>
    <SearchBox placeholder="Search" underlined/>
  </Col>
</Row>
```
:::

## 禁用的搜索框

::: demo
```html
<Row gutter=".5rem 0">
  <Col>
    <SearchBox placeholder="Search" disabled/>
  </Col>
</Row>
<Row gutter=".5rem 0">
  <Col>
    <SearchBox placeholder="Search" underlined disabled/>
  </Col>
</Row>
```
:::

## 自定义图标的搜索框

::: demo
```html
<Row gutter=".5rem 0">
  <Col>
    <SearchBox placeholder="Filter" icon="icon-Filter"/>
  </Col>
</Row>
```
:::

## 自定义宽度的搜索框

::: demo
```html
<Row gutter=".5rem 0">
  <Col>
    <SearchBox style="width: 200px;"/>
  </Col>
</Row>
```
:::

## 属性

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| value | 搜索框的值 | String, Number | — | — |
| disableAnimation | 禁用动画 | Boolean | — | true |
| underlined | 下划线边框 | Boolean | — | false |
| placeholder | 搜索框的 placeholder | String | — | false |
| icon | 搜索框的 图标 | String | — | `icon-Search` |
| disabled | 禁用搜索框 | Boolean | — | false |


## 事件

| 参数  | 说明 | 回调参数 |
|-------|------ |------|
| input | 搜索框的值发生变化后触发 | (value: 搜索框的值) |
| change | 搜索框失焦或用户按下回车触发 | (value: 搜索框的值) |
| escape | 用户按下 esp 触发 | (value: 搜索框的值) |
| search | 用户按下 enter 触发 | (value: 搜索框的值) |
