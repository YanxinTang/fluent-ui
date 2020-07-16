<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    gutter: {
      type: String,
      default: '',
    },
  },
};
</script>
