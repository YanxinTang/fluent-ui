<template>
  <button
    type="button"
    class="button" 
    :class="buttonClass"
    @click="$emit('click', $event)"
    :disabled="disabled"
  >
    <span class="button__label">
      <i :class="['icon', `icon-${icon}`]" v-if="icon"></i>
      <slot></slot>
    </span>
    <span class="button__description" v-if="hasSecondaryText">{{ secondaryText }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    secondaryText: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasSecondaryText() {
      return this.secondaryText !== '';
    },
    buttonClass() {
      return { 
        'button--primary': this.primary,
        'button--plain': this.plain,
        'button--compound': this.hasSecondaryText,
      };
    }
  }
}
</script>