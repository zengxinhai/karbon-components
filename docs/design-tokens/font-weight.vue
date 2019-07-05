<template>
  <div class="container">
    <div v-for="font in fontList" :key="font.weight" class="font-item">
      <p :style="`font-weight: ${font.weight}`">{{ font.scss}} (weight: {{ font.weight }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontList: [
        { weight: '700', scss: '$font-weight-bold' },
        { weight: '400', scss: '$font-weight-normal' },
        { weight: '300', scss: '$font-weight-light' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24px;
}

.font-item {
  margin-bottom: 12px;
}
</style>
