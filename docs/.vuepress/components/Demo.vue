<template>
  <div class="demo">
    <div class="demo-head">
      <div >
        <div class="title">
          {{ title }}
        </div>
        <div v-if="description" class="description">
          {{ description }}
        </div>
      </div>
      <div class="toolbar">
        <Button icon="Embed" primary plain @click="isShowCode = !isShowCode"></Button>
      </div>
    </div>
    <div class="demo-body">
      <div class="body__cooked">
        <slot></slot>
      </div>
      <div class="body__fresh" v-show="isShowCode">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    title: {
      type: String,
      default: '例子',
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowCode: false,
    }
  }
}
</script>

<style lang="scss">
.demo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  border: 1px solid #eee;
  margin: 12px 0;

  .demo-head, .demo-body {
    padding: 10px 16px;
  }

  .demo-head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .description {
      font-weight: normal;
      font-size: 0.8rem;
    }

    .toolbar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .demo-body {
    .body__fresh {
      margin: 16px 0;
      border-top: 1px dashed #eee;
    }
  }
}
</style>