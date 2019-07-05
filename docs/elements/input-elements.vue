<template>
  <div>
    <h4>Text Input</h4>
    <KarbonFormInput name="Name" v-model="name" placeholder="Name" />
    <h4>Select</h4>
    <KarbonFormSelect name="Gender" v-model="gender" :options="genderOptions" placeholder="Gender" />
  </div>
</template>

<script>
import KarbonFormInput from '../../src/components/form-controls/karbon-form-input';
import KarbonFormSelect from '../../src/components/form-controls/karbon-form-select.vue';

export default {
  components: { KarbonFormInput, KarbonFormSelect },
  data() {
    return {
      name: '',
      gender: '',
      birthday: '',
      genderOptions: [
        { text: 'Male', value: 1 },
        { text: 'Female', value: 2 },
      ],
    }
  }
}
</script>
