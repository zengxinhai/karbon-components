<template>
  <div id="app" style="padding: 0 10px;">
    <karbon-form-input
      name="formInput"
      v-model="input"
      placeholder="名字"
      prepend="+86"
      class="example-item"
    />
    <karbon-form-select
      name="formSelect"
      v-model="select"
      placeholder="性别"
      :options="selectOptions"
      class="example-item"
    />
    <karbon-date-input
      v-model="date"
      placeholder="Date"
      class="example-item"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      select: '',
      date: '2019-06-19',
      selectOptions: [
        { value: 0, text: 'male' },
        { value: 1, text: 'female' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 1000px;
}
.example-item {
  margin-bottom: 20px;
}
</style>
