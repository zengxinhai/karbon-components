<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <slot name="card-title"></slot>
      </div>
      <div class="card-body">
        <slot name="card-body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 4px;
  background-color: #fff;
  padding: 16px;
  .card-body {
    flex: 1 1 auto;
    .card-title {
      margin-bottom: 16px;
    }
  }
}
</style>
