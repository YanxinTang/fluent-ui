# Icon 图标

## 使用方法

通过设置类名 `icon icon-name` 来

<template>
  <div class="icon-list">
    <div class="icon-item">
      <div class="icon-item__icon">
        <i class="icon icon-BeerMug" />
      </div>
    </div>
  </div>
</template>

```html
<i class="icon icon-BeerMug">
```

## 图标展示

<template>
  <div class="icon-list">
    <div class="icon-item" v-for="name in $icons" :key="name">
      <div class="icon-item__icon">
        <i :class="['icon', `icon-${name}`]"/>
      </div>
      <div class="icon-item__name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .icon-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
    color: #3b3a39;

    .icon-item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 80px;
      height: 80px;

      &:last-child {
        margin-right: auto;
      }

      &:hover .icon-item__name{
        visibility: visible;
        opacity: 1;
      }

      .icon-item__icon {
        font-size: 2.5rem;
      }
      
      .icon-item__name {
        font-size: 0.8rem;
        color: #323130;
        visibility: hidden;
        opacity: 0;
        transition: all 100ms linear;
      }
    }
  }
</style>