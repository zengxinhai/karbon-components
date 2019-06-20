import Vue from 'vue';
import App from './App.vue'
import karbonFormInput from './components/form-controls/karbon-form-input.vue'
import karbonFormSelect from './components/form-controls/karbon-form-select.vue'
import karbonDateInput from './components/form-controls/karbon-date-input.vue'
import karbonFlipCard from './components/widgets/flip-card.vue'
import karbonCountDown from './components/widgets/count-down.vue'

Vue.component('karbonFormInput', karbonFormInput);
Vue.component('karbonFormSelect', karbonFormSelect);
Vue.component('karbonDateInput', karbonDateInput);
Vue.component('karbonFlipCard', karbonFlipCard);
Vue.component('karbonCountDown', karbonCountDown);

new Vue({
  render: h => h(App)
}).$mount('#app')
