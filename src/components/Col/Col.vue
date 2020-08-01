<template>
  <div class="col" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { isValidGridValue } from '@/utils';

export default {
  name: 'Col',
  props: {
    span: {
      type: Number,
      default: 12,
      validator: isValidGridValue,
    },
    offset: {
      type: Number,
      default: 0,
      validator: isValidGridValue,
    },
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object],
    xxxl: [Number, Object],
  },
  computed: {
    classList() {
      const classList = [];

      ['span', 'offset'].forEach(prop => {
        if (this[prop] > 0) {
          const className = prop === 'span' ? `col-${this[prop]}` : `col-${prop}-${this[prop]}`;
          classList.push(className);
        }
      });

      ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          // :sm = { span: 6, offset: 6 }
          for (const [prop, value] of Object.entries(this[size])) {
            const className = prop === 'span' ? `col-${size}-${value}` : `col-${size}-${prop}-${value}`;
            classList.push(className);
          }
        }
      });
      return classList;
    },
    style() {
      if (this.$parent && this.$parent.gutter) {
        return { padding: this.$parent.gutter };
      }
      return '';
    },
  },
};
</script>
