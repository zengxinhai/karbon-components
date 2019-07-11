import Vue from "vue";
import App from "./App.vue";
import KarbonFormInput from "./components/form-controls/karbon-form-input.vue";
import KarbonFormSelect from "./components/form-controls/karbon-form-select.vue";
import KarbonDateInput from "./components/form-controls/karbon-date-input.vue";
import KarbonFlipCard from "./components/widgets/flip-card.vue";
import KarbonCountDown from "./components/widgets/count-down.vue";

Vue.component("KarbonFormInput", KarbonFormInput);
Vue.component("KarbonFormSelect", KarbonFormSelect);
Vue.component("KarbonDateInput", KarbonDateInput);
Vue.component("KarbonFlipCard", KarbonFlipCard);
Vue.component("KarbonCountDown", KarbonCountDown);

new Vue({
  render: h => h(App)
}).$mount("#app");
