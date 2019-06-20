import Vue from "vue";
import App from "./App.vue";
import karbonFormInput from './components/form-controls/karbon-form-input.vue';
import karbonFormSelect from './components/form-controls/karbon-form-select.vue';
import karbonDateInput from './components/form-controls/karbon-date-input.vue';
import karbonFlipCard from './components/widgets/flip-card.vue';
import karbonCountDown from './components/widgets/count-down.vue';

Vue.component('karbon-form-input', karbonFormInput)
Vue.component('karbon-form-select', karbonFormSelect)
Vue.component('karbon-date-input', karbonDateInput)

new Vue({
  render: h => h(App)
}).$mount("#app")

export {
  karbonFormInput,
  karbonFormSelect,
  karbonDateInput,
  karbonFlipCard,
  karbonCountDown
}
