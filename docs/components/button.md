# Button 按钮

[[toc]]

## 基础用法

::: demo
```html
<Button>Button</Button>
<Button plain>Button</Button>
<Button primary>Button</Button>
<Button primary plain>Button</Button>
```
:::


::: demo 绑定事件
```html
<template>
  <Button @click="hello">Button</Button>
</template>
<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```
:::

## 组合按钮

::: demo

```html
<div class="button-group">
  <Button secondary-text="This is the secondary text.">Button</Button>
  <Button plain secondary-text="This is the secondary text.">Button</Button>
</div>
<div class="button-group">
  <Button primary secondary-text="This is the secondary text.">Button</Button>
  <Button primary plain secondary-text="This is the secondary text.">Button</Button>
</div>
```
:::

## 图标按钮

::: demo

```html
<div class="button-group">
  <Button icon="Mail"></Button>
  <Button icon="Mail" primary plain></Button>
  <Button icon="Mail" plain></Button>
</div>
<div class="button-group">
  <Button icon="Mail">Send Email</Button>
  <Button icon="Mail" primary plain>Send Email</Button>
  <Button icon="Mail" plain>Send Email</Button>
</div>
<div class="button-group">
  <Button secondary-text="This is the secondary text." icon="Mail">Button</Button>
  <Button primary secondary-text="This is the secondary text." icon="Mail">Button</Button>
  <Button primary plain secondary-text="This is the secondary text." icon="Mail">Button</Button>
</div>
```
:::


## 属性

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|------ |------|------|------|
| primary | 是否为主题按钮 | Boolean | -- | false |
| plain | 是否朴素按钮 | Boolean | -- | false |
| icon | 按钮图标 | String | -- | false |
| secondary-text | 次要文字 | String | -- | |


<style lang="scss">
.demo {
  margin: 1rem 0;

  .button-group {
    margin: 0.5rem 0;
  }
}
</style>
<!-- 
<script>
export default {
  name: 'page',
  components: {
    'demo-block-1':(function() {

      var render = function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_vm._v("\n  2222\n")])
  }
  var staticRenderFns = []
  render._withStripped = true


      const democomponentExport = {
      methods: {
        hello() {
          alert('Hello World!');
        }
      }
    }
      return {
        render,
        staticRenderFns,
        ...democomponentExport
      }
    })()
  }
}
</script> -->