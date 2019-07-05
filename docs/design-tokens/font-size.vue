<template>
  <div class="container">
    <div v-for="font in fontList" :key="font.size" class="font-item">
      <p :style="`font-size: ${font.size}`">{{ font.scss}} ({{ font.size }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontList: [
        { size: '64px', scss: '$size-xxxl' },
        { size: '48px', scss: '$size-xxl' },
        { size: '36px', scss: '$size-xl' },
        { size: '24px', scss: '$size-l' },
        { size: '16px', scss: '$size-m' },
        { size: '13px', scss: '$size-s' },
        { size: '11px', scss: '$size-xs' },
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
