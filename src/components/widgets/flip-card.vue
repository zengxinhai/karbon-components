<template>
  <div class="flip-container">
    <div class="flipper" :style="{height: height + 'px', width: width + 'px'}">
      <div class="front">
        <slot name="front"></slot>
      </div>
      <div class="back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipCard',
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
  }
}
</script>

<style lang="scss" scoped>

@mixin flip-card() {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.6s;
}
.flip-container {
  perspective: 1000;
  &:hover, &.hover {
    .flipper {
      transform: rotateY(180deg);
    }
  }
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    .front, .back {
      @include flip-card;
    }
    .front {
      transform: ratateY(0deg);
      z-index: 2;
    }
    .back {
      transform: rotateY(180deg);
    }
  }
}
</style>
