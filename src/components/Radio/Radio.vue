<template>
  <label
    class="radio"
    :class="{
      'radio--disabled': isDisabled,
      'radio--checked': isChecked,
      'radio--focus': focus,
    }"
  >
    <input
      type="radio"
      class="radio__control"
      :value="label"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="changeHandler"
      @focus="focus = true"
      @blur="focus = false"
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
  data() {
    return {
      focus: false,
    };
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
