<template>
  <div>
    <h4>Text Input</h4>
    <KarbonFormInput name="Name" v-model="name" placeholder="Name" />
    <h4>Select</h4>
    <KarbonFormSelect name="Gender" v-model="gender" :options="genderOptions" placeholder="Gender" />
    <h4>Date Input</h4>
    <KarbonDateInput name="Birthday" v-model="birthday" placeholder="Birthday" />
  </div>
</template>

<script>
import KarbonFormInput from '../../src/components/form-controls/karbon-form-input';
import KarbonDateInput from '../../src/components/form-controls/karbon-date-input.vue';
import KarbonFormSelect from '../../src/components/form-controls/karbon-form-select.vue';

export default {
  components: { KarbonFormInput, KarbonDateInput, KarbonFormSelect },
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
