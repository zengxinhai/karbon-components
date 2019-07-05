<template>
  <div class="color-palette-container">
    <div class="color-card" v-for="color of colors" :key="color.value">
      <div class="color-card_hero" :style="`background-color: ${color.value}`"></div>
      <div class="color-card_desc">
        <div class="mb-1"><strong>{{color.name}}</strong></div>
        <div class="mb-1 text-muted"><small>CODE: {{color.value}}</small></div> 
        <div class="mb-1 text-muted"><small>SCSS: {{color.scss}}</small></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'Primary', value: '#4789c8', scss: '$color-primary' },
        { name: 'Secondary', value: '#6c757d', scss: '$color-secondary' },
        { name: 'Success', value: '#28a745', scss: '$color-success' },
        { name: 'Info', value: '#17a2b8', scss: '$color-info' },
        { name: 'Warning', value: '#ffc107', scss: '$color-warning' },
        { name: 'Danger', value: '#dc3545', scss: '$color-danger' },
        { name: 'Light', value: '#f8f9fa', scss: '$color-light' },
        { name: 'Dark', value: '#343a40', scss: '$color-dark' },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.color-palette-container {
  display: grid;
  margin-top: 24px;
  align-content: stretch;
  justify-content: left;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px)  {
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-column-gap: 24px;
}

.color-card {
  margin-bottom: 24px;
  border-radius: 3px;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
  .color-card_hero {
    height: 8rem;
  }
  .color-card_desc {
    padding: 1rem;
  }
}

.mb-1 {
  margin-bottom: 0.5rem;
}

.text-muted {
  color: #7f8891;
}

</style>
