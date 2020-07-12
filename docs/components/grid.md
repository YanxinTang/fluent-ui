# Grid 栅格

Fluent-UI 的栅格布局是借助 `flex` 来完成的。主要有两个组件：`Row`, `Col`。每一行分为 12 列，通过不同组合，可以快速开发出不同设备上自适应的应用。

`Row` 和 `Col` 组件共同实现栅格系统，一般情况下，应该将 `Col` 组件放置在 `Row` 组件内部。

[[toc]]

## 栅格系统分界点

| 分界点 | 简写 | 宽度 |
|------|------|------|
| small | sm | 0px - 479px |
| medium | md | 480px - 639px |
| large | lg | 640px - 1023px |
| extra large | xl | 1024px - 1365px |
| extra extra large | xxl | 1366px - 1919px |
| extra extra extra large | xxxl | 1920px 以上 |

## 基础布局

:::demo 
```html
<template>
  <Row>
    <Col :span="12">
      <div class="demo-placeholder">12</div>
    </Col>
  </Row>
  <Row>
    <Col :span="6"><div class="demo-placeholder">6</div></Col>
    <Col :span="6"><div class="demo-placeholder">6</div></Col>
  </Row>
  <Row>
    <Col :span="4"><div class="demo-placeholder">4</div></Col>
    <Col :span="4"><div class="demo-placeholder">4</div></Col>
    <Col :span="4"><div class="demo-placeholder">4</div></Col>
  </Row>
  <Row>
    <Col :span="8"><div class="demo-placeholder">8</div></Col>
    <Col :span="4"><div class="demo-placeholder">4</div></Col>
  </Row>
</template>
```
:::


## 响应式布局

:::demo 栅格宽度自适应
```html
<template>
  <Row>
    <Col v-for="i in 12" :key="i" :sm="12" :md="4" :lg="3" :xl="2" :xxl="1">
      <div class="demo-placeholder"></div>
    </Col>
  </Row>
  <Row>
    <Col :md="6" :xl="4" :xxxl="3">
      <div class="demo-placeholder"></div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="3">
      <div class="demo-placeholder"></div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="3">
      <div class="demo-placeholder"></div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="3">
      <div class="demo-placeholder"></div>
    </Col>
  </Row>
</template>
```
:::

:::demo 不同屏幕尺寸下的 `offset` 属性
```html
<template>
  <Row>
    <Col :md="6" :xl="4" :xxxl="{span: 2, offset: 1}">
      <div class="demo-placeholder">1</div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="{span: 2, offset: 1}">
      <div class="demo-placeholder">1</div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="{span: 2, offset: 1}">
      <div class="demo-placeholder">1</div>
    </Col>
    <Col :md="6" :xl="4" :xxxl="{span: 2, offset: 1}">
      <div class="demo-placeholder">1</div>
    </Col>
  </Row>
</template>
```
:::

## Offset 列偏移

:::demo 
```html
<template>
  <Row>
    <Col :span="4" :offset="4">
      <div class="demo-placeholder">4</div>
    </Col>
  </Row>
  <Row>
    <Col :span="4">
      <div class="demo-placeholder">4</div>
    </Col>
    <Col :span="4" :offset="4">
      <div class="demo-placeholder">4</div>
    </Col>
  </Row>
  <Row>
    <Col :span="2" :offset="2">
      <div class="demo-placeholder">2</div>
    </Col>
    <Col :span="6" :offset="2">
      <div class="demo-placeholder">6</div>
    </Col>
  </Row>
</template>
```
:::

## Gutter 栅格间距

::: demo
```html
<template>
  <Row gutter="10px 0">
    <Col :span="2">水平 ({{hslider}}px) ：</Col>
    <Col :span="10">
      <input
        type="range" 
        min="0" 
        max="48" 
        v-model.number="hslider" 
        class="demo-grid-gutter-slider"
      />
    </Col>
  </Row>
  <Row gutter="10px 0">
    <Col :span="2">垂直 ({{vslider}}px) ：</Col>
    <Col :span="10">
      <input
        type="range" 
        min="0" 
        max="48" 
        v-model.number="vslider" 
        class="demo-grid-gutter-slider"
      />
    </Col>
  </Row>
  <Row :gutter="gutter" style="border: 1px solid #a0aeb2;">
    <Col :span="4"><div class="demo-placeholder">2</div></Col>
    <Col :span="4"><div class="demo-placeholder">2</div></Col>
    <Col :span="4"><div class="demo-placeholder">2</div></Col>
  </Row>
</template>
<script>
  export default {
    name: 'DemoGridGutter',
    data() {
      return {
        hslider: 4,
        vslider: 8,
      };
    },
    computed: {
      gutter() {
        return `${this.vslider}px ${this.hslider}px`;
      }
    }
  }
</script>
```
:::

## 属性

### `Row`

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| gutter | 栅格边距 | string | css `padding` 属性的合法值 | — |


### `Col`

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| span | 默认占据栅格列数 | number | 0 - 12 | 12 |
| offset | 栅格偏移列数 | number | 0 - 12 | 12 |
| sm | 0px - 479px 占据栅格列数 | number | — | — |
| md | 480px - 639px 占据栅格列数 | number | — | — |
| lg | 640px - 1023px 占据栅格列数 | number | — | — |
| xl | 1024px - 1365px 占据栅格列数 | number | — | — |
| xxl | 1366px - 1919px 占据栅格列数 | number | — | — |
| xxxl | 1920px 以上 | 占据栅格列数 | number | — | — |

## 单组件导入

```js
import { Row, Col } from 'fluent-ui/grid';
```

<style lang="scss">
  $oddBackgroundColor: #69797e;
  $evenBackgroundColor: #a0aeb2;
  
  .demo .body__cooked>.row {
    margin-bottom: 20px;
  }

  .row {
    .demo-placeholder {
      background: $oddBackgroundColor;
    }
    
    .col:nth-child(2n) .demo-placeholder {
      background: $evenBackgroundColor;  
    }
  }

  .demo-placeholder {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
  }

  .demo-grid-gutter-slider {
    width: 100%;
  }

</style>