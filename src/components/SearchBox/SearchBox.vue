<template>
  <div
    class="searchbox"
    :class="{
      'searchbox--disabled': disabled,
      'searchbox--focus': focus,
      'searchbox--animation': !disableAnimation,
      'searchbox--underlined': underlined,
      'searchbox--has-input': hasInput,
    }"
    role="search"
  >
    <div class="searchbox__icon-container">
      <i :class="['icon', icon]"></i>
    </div>
    <input
      type="text"
      class="searchbox__field"
      ref="field"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
      @keydown.esc="$emit('escape')"
      @keydown.enter="$emit('search', value)"
    />
    <div class="searchbox__clear-button" v-if="hasInput">
      <Button icon="Clear" plain @click="clearButtonClickHandler"></Button>
    </div>
  </div>
</template>

<script>
import Button from '@components/Button';

export default {
  name: 'SearchBox',
  components: { Button },
  props: {
    value: [String, Number],
    disableAnimation: Boolean,
    underlined: Boolean,
    placeholder: String,
    icon: {
      type: String,
      default: 'icon-Search',
    },
    disabled: Boolean,
  },
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    hasInput() {
      return this.value !== undefined && String(this.value).length > 0;
    },
  },
  methods: {
    clearButtonClickHandler() {
      this.$emit('escape');
      this.$refs.field.focus();
    },
  },
};
</script>
