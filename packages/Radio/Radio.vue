<template>
  <label
    class="radio"
    :class="{
      'radio--disabled': isDisabled,
      'radio--checked': isChecked,
    }"
  >
    <input
      type="radio"
      class="radio__control"
      :value="label"
      @change="changeHandler"
      :disabled="isDisabled"
      :checked="isChecked"
    />
    <span class="radio__input"></span>
    <span class="radio__text" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    isChecked() {
      return this.value === this.label;
    },
    isDisabled() {
      return this.disabled;
    },
  },
  methods: {
    changeHandler() {
      this.$emit('change', this.label);
    },
  },
};
</script>
