# Toggle 开关

## 基础用法

::: demo
```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="未禁用且默认选中" checked/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="禁用且默认选中" checked disabled/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="禁用且默认未选中" disabled/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="行内标签" on-text="On" off-text="Off" inline/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="禁用状态下的使用行内标签" on-text="On" off-text="Off" inline disabled/>
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="有行内标签但是没有状态文本" inline />
    </Col>
  </Row>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle label="禁用状态下有行内标签但是没有状态文本" inline disabled/>
    </Col>
  </Row>
</template>
```
:::

## v-model 绑定

::: demo
```html
<template>
  <Row gutter=".5rem 0">
    <Col>
      <Toggle v-model="toggle" inline /> 
      {{ toggle ? '^-^' : '&.&' }}
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "ToggleDemo",
    data() {
      return {
        toggle: true,
      };
    }
  }
</script>
```
:::

## 属性

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| inline | 是否显示为行内元素（flex-inline） | Boolean | -- | false |
| checked | 默认是否选中 | Boolean | -- | false |
| disabled | 是否禁用 | Boolean | -- | false |
| value | 开关表示的值 | String, Boolean, Number | -- |  |
| trueValue | 开关打开时的值 | String, Boolean, Number | -- | |
| falseValue | 开关关闭时的值 | String, Boolean, Number | -- | |
| label | 开关的描述标签 | String | -- | |
| onText | 开关打开时的文字描述 | String | -- | |
| offText | 开关关闭时的文字描述 | String | -- | |
| role | 无障碍语义 | String | `checkbox`, `switch`, `menuitemcheckbox` | `switch` |