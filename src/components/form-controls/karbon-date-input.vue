<template>
  <div class="wrapper">
    <date-picker
      id="picker"
      v-bind="$attrs"
      :name="name"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :disabledDates="disabledDates"
      @input="$emit('input', $event)"
      @opened="activeLabelColor"
      :class="{'input-to-bottom': inputToBottom, 'validate-error': error}"
      ref="datepicker"
    ></date-picker>
    <label for="picker" class="label" :class="{'label-is-show': labelIsShow, 'label-color': labelColor}">
      {{ placeholder }}
    </label>
    <span
      v-if="error"
      class="error-message"
    >
      {{ error }}
    </span>
  </div>
</template>

<script>
import datePicker from 'vuejs-datepicker';

export default {
  name: 'karbonDatePicker',
  components: { datePicker },
  inheritAttrs: false,
  props: {
    name: {
      type: String,
    },
    value: {
      type: [String, Date],
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabledDates: {
      type: Object,
      default() {
        return {
          from: new Date()
        }
      }
    }
  },
  data() {
    return {
      labelIsShow: false,
      labelColor: false,
      inputToBottom: false,
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val && val !== '') {
          this.inputToBottom = true
          this.inputPlaceholder = ''
          this.labelIsShow = true
        } else {
          this.inputToBottom = false
          this.labelIsShow = false
          this.inputPlaceholder = this.placeholder
        }
      },
      immediate: true
    }
  },
  mounted() {
    let input = this.$refs.datepicker.$el.querySelector('input')
    input.addEventListener('focus', this.activeLabelColor)
    input.addEventListener('blur', this.deactiveLabelColor)
  },
  beforeDestroy() {
    let input = this.$refs.datepicker.$el.querySelector('input')
    input.removeEventListener('focus', this.activeLabelColor)
    input.removeEventListener('blur', this.deactiveLabelColor)
  },
  methods: {
    activeLabelColor() {
      this.labelColor = true
    },
    deactiveLabelColor() {
      this.labelColor = false
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_var.scss';

.wrapper {
  position: relative;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
    &.label-is-show {
      top: 6px;
      opacity: 1;
      visibility: visible;
    }
    &.label-color {
      color: $primary-color;
    }
  }

  & > .vdp-datepicker {
    input {
      font-size: $font-size;
      box-sizing: border-box;
      width: 100%;
      padding: $normal-padding;
      font-weight: 400;
      border: 1px solid #e0e0e0;
      border-radius: 0.25rem;
      background: $input-bg-color;
    }
    input:focus {
      border: 1px solid $primary-color;
    }
    &.validate-error input {
      border: 1px solid $red;
    }
    &.input-to-bottom input {
      padding: $to-bottom-padding;
    }
  }

  & > .error-message {
    position: absolute;
    color: $red;
    font-size: $small-font-size;
    top: 6px;
    right: 6px;
  }
}
</style>
