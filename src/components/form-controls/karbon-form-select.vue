<template>
  <div class="wrapper">

    <select
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="handleSelectChange"
      :class="{
        'select-to-bottom': selectToBottom,
        'validate-error': error,
        'rounded': true,
        'bg-light': true,
      }"
      ref="select"
      required
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>

    <div class="label" :class="{'label-is-show': labelIsShow}">
      {{ placeholder }}
    </div>

    <span
      v-if="error"
      class="error-message"
    >
      {{ error }}
    </span>

    <div
      class="append"
      :class="{ 'validate-error': Boolean(error), 'rounded-right': true }"
    >
      <div class="icon-down"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "KarbonFormSelect",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    name: String,
    disabled: String,
    value: [String, Number],
    options: {
      type: Array
    },
    error: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      labelIsShow: false,
      selectToBottom: false,
    }
  },
  watch: {
    value: {
      handler(val) {
        if ((val || val === 0) && val !== '') {
          this.selectToBottom = true
          this.labelIsShow = true
        } else {
          this.selectToBottom = false
          this.labelIsShow = false
        }
      },
      immediate: true
    }
  },
  methods: {
    handleSelectChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_var.scss';

.wrapper {
  position: relative;
  display: block;
  & > select {
    width: 100%;
    padding: $normal-padding;
    border: 1px solid $border-color;
    color: #555;
    &:focus {
      border: 1px solid $primary-color;
      transition: border-color .15s ease-in-out;
      outline: none;
    }
    &.validate-error {
      border: 1px solid $red;
    }
    &.select-to-bottom {
      padding: $to-bottom-padding;
    }
    option:not(:first-child) {
      color: #000;
    }
  }

  & > select:focus + .label {
    color: $primary-color;
  }

  & > .label {
    position: absolute;
    font-size: $small-font-size;
    font-weight: bold;
    color: $color-label;
    visibility: hidden;
    opacity: 0;
    top: 16px;
    left: 17px;
    transition: opacity 200ms ease-in-out, top 200ms ease-in-out;
    pointer-events: none;
    &.label-is-show {
      top: 6px;
      opacity: 1;
      visibility: visible;
    }
  }

  & > .error-message {
    position: absolute;
    color: $red;
    font-size: $small-font-size;
    top: 6px;
    right: 67px;
  }

  & > .append {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    right: 1px;
    top: 1px;
    bottom: 1px;
    width: 50px;
    background: #eee;
    > .icon-down {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      &::after,
      &::before {
        content: '';
        height: 12px;
        width: 1px;
        background: #5d5d5d;
      }
      &::before {
        position: relative;
        left: 5px;
        transform: rotate(45deg);
      }
      &::after {
        position: relative;
        right: 4px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
