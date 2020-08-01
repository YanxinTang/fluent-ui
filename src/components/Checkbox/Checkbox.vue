<template>
  <label
    class="checkbox"
    :class="{
      'checkbox--disabled': isDisabled,
      'checkbox--checked': isChecked,
      'checkbox--focus': focus,
    }"
  >
    <input
      type="checkbox"
      class="checkbox__control"
      :value="checkboxValue"
      :disabled="isDisabled"
      @change="changeHandler"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span class="checkbox__input">
      <i class="checkbox__inner icon icon-CheckMark"></i>
    </span>
    <span class="checkbox__text" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { isBoolean, isArray, isUndefined } from '@/utils';

export default {
  name: 'Checkbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: [String, Number],
    },
    value: {
      type: [Boolean, Array],
      default: undefined,
    },
  },
  data() {
    return {
      selfValue: this.checked,
      focus: false,
    };
  },
  computed: {
    isUseSelfValue() {
      return isUndefined(this.value);
    },
    checkboxValue() {
      return this.isUseSelfValue ? this.selfValue : this.value;
    },
    isChecked() {
      if (isBoolean(this.checkboxValue)) {
        return this.checkboxValue === true;
      }
      if (isArray(this.checkboxValue)) {
        return this.checkboxValue.includes(this.label);
      }
      return false;
    },
    isDisabled() {
      return this.disabled;
    },
  },
  methods: {
    changeHandler() {
      let newValue;
      if (this.isUseSelfValue) {
        newValue = this.selfValue = !this.selfValue;
      } else if (isBoolean(this.value)) {
        newValue = !this.value;
      } else if (isArray(this.value)) {
        if (this.isChecked) {
          newValue = [...this.value];
          newValue.splice(newValue.indexOf(this.label), 1);
        } else {
          newValue = [...this.value, this.label];
        }
      }
      this.$emit('change', newValue);
    },
  },
};
</script>
