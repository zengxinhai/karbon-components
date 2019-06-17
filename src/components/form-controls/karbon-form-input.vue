<template>
  <div class="wrapper">
    
    <div v-if="Boolean(prepend)" class="prepend" :class="{'validate-error': error}">
      {{ prepend }}
    </div>

    <div class="input-container rounded">
      <input
        :name="name"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="inputPlaceholder"
        :type="type"
        @input="$emit('input', $event.target.value)"
        :class="{'input-to-bottom': inputToBottom, 'validate-error': error, 'bg-light': true, 'has-prepend': Boolean(prepend)}" 
      >
      <span class="label" :class="{'label-is-show': labelIsShow}">
        {{ placeholder }}
      </span>
      <span
        v-if="error"
        class="error-message"
      >
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KarbonFormInput',
  props: {
    prepend: {
      type: [String, Boolean],
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    },
    placeholder: {
      type: String,
    }
  },
  mounted() {
    if (this.value && this.value !== '') {
      this.inputToBottom = true
      this.inputPlaceholder = ''
      this.labelIsShow = true
    }
  },
  data() {
    return {
      inputPlaceholder: this.placeholder,
      inputToBottom: false,
      labelIsShow: false
    }
  },
  watch: {
    value(val) {
      if (val && val !== '') {
        this.inputToBottom = true
        this.inputPlaceholder = ''
        this.labelIsShow = true
      } else {
        this.inputToBottom = false
        this.labelIsShow = false
        this.inputPlaceholder = this.placeholder
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/_var.scss';

.wrapper {
  width: 100%;
  display: flex;
  font-size: $font-size;
  outline: none;
  border: none;
  > .prepend {
    height: 57px;
    line-height: 57px;
    padding: 0 16px;
    border: 1px solid $border-color;
    border-right: none;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background: $prepend-bg-color;
    &.validate-error {
      border: 1px solid $red;
      border-right: none;
    }
  }
  > .input-container {
    position: relative;
    width: 100%;
    & > input {
      width: 100%;
      border: 1px solid $border-color;
      border-radius: 0.25rem;
      transition: border-color .15s ease-in-out;
      background: $input-bg-color;
      padding: $normal-padding;
      font-size: inherit;
      &:focus {
        border: 1px solid $primary-color;
        outline: none;
      }
      &.has-prepend {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &.validate-error {
        border: 1px solid $red;
      }
      &.input-to-bottom {
        padding: $to-bottom-padding;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        background: transparent;
        cursor: not-allowed;
      }
      &[readonly] {
        cursor: default;
      }
    }

    & > input:focus + .label {
      color: $primary-color;
    }

    > .label {
      position: absolute;
      font-size: $small-font-size;
      font-weight: bold;
      color: $color-label;
      visibility: hidden;
      opacity: 0;
      top: 16px;
      left: 17px;
      transition: opacity 200ms ease-in-out, top 200ms ease-in-out;
      &.label-is-show {
        top: 6px;
        opacity: 1;
        visibility: visible;
      }
    }

    > .error-message {
      position: absolute;
      color: $red;
      font-size: $small-font-size;
      top: 6px;
      right: 6px;
    }
  }
}
</style>
