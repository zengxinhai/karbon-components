<template>
  <div id="app">
    <karbon-form-input name="formInput" v-model="input" placeholder="名字"></karbon-form-input>
    <karbon-form-select name="formSelect" v-model="select" placeholder="性别" :options="selectOptions"></karbon-form-select>
    <karbon-date-input v-model="date" placeholder="Date"></karbon-date-input>
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
</style>
