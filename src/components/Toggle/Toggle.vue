<template>
  <div
    class="toggle"
    :class="{
      'toggle--inline': inline,
      'toggle--checked': isChecked,
      'toggle--disabled': isDisabled,
      'toggle--focus': focus,
      'toggle--with-state-text': hasStateText,
    }"
    :role="role"
    @click.prevent="changeHandler"
  >
    <label v-if="label" :for="selfID" class="toggle__label">{{ label }}</label>
    <div class="toggle__inner-container">
      <div class="toggle__background">
        <span class="toggle-thumb"></span>
      </div>
      <label v-if="onText || offText" class="toggle__state-text" :for="selfID">
        {{ isChecked ? onText : offText }}
      </label>
      <input
        :id="selfID"
        type="checkbox"
        class="toggle__control"
        :disabled="isDisabled"
        :value="checkboxValue"
        :true-value="trueValue"
        :false-value="falseValue"
        @change="changeHandler"
        @focus="focus = true"
        @blur="focus = false"
      />
    </div>
  </div>
</template>

<script>
import { isUndefined } from '@/utils';

let innerToggleID = 0;

export default {
  name: 'Toggle',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: undefined,
    },
    inline: Boolean,
    checked: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    label: String,
    onText: String,
    offText: String,
    role: {
      type: String,
      default: 'switch',
      validator: val => ['checkbox', 'switch', 'menuitemcheckbox'].includes(val),
    },
  },
  data() {
    return {
      selfID: `toggle-${innerToggleID++}`,
      selfValue: this.checked ? this.trueValue : this.falseValue,
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
      return this.checkboxValue === this.trueValue;
    },
    isDisabled() {
      return this.disabled;
    },
    hasStateText() {
      return this.onText || this.offText;
    },
  },
  methods: {
    changeHandler() {
      if (this.isDisabled) {
        return;
      }
      const newValue = this.isChecked ? this.falseValue : this.trueValue;
      if (this.isUseSelfValue) {
        this.selfValue = newValue;
      }
      this.$emit('change', newValue);
    },
  },
};
</script>
