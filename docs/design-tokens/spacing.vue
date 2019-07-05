<template>
  <div class="container">
    <div class="spacing-item" v-for="spacing in spacingList" :key="spacing.value" :style="`height: ${spacing.value}`">
      <div>{{ spacing.scss }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spacingList: [
        { scss: '$space-xxxl', value: '128px'  },
        { scss: '$space-xxl', value: '64px'  },
        { scss: '$space-xl', value: '48px'  },
        { scss: '$space-l', value: '24px'  },
        { scss: '$space-m', value: '16px'  },
        { scss: '$space-x', value: '8px'  },
        { scss: '$space-xs', value: '4px'  },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24px;
}

.spacing-item {
  background-color: #f8f9fa;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
