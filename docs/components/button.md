# Button

[[toc]]

## 基础用法

<template>
  <div class="demo">
    <Button>Button</Button>
    <Button plain>Button</Button>
    <Button primary>Button</Button>
    <Button primary plain>Button</Button>
  </div>
</template>

## 组合按钮

<template>
  <div class="demo">
    <div class="button-group">
      <Button secondary-text="This is the secondary text.">Button</Button>
      <Button plain secondary-text="This is the secondary text.">Button</Button>
    </div>
    <div class="button-group">
      <Button primary secondary-text="This is the secondary text.">Button</Button>
      <Button primary plain secondary-text="This is the secondary text.">Button</Button>
    </div>
  </div>
</template>

## Attributes

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| primary | 是否为主题按钮 | Boolean | -- | false |
| plain | 是否朴素按钮 | Boolean | -- | false |
| secondary-text | 次要文字 | String | -- | |


<style lang="scss">
.demo {
  margin: 1rem 0;

  .button-group {
    margin: 0.5rem 0;
  }
}
</style>