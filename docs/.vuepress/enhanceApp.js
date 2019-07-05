import InputComponents from '../elements/input-elements.vue';
import ColorPalette from '../design-tokens/color-palette.vue';
import FontSize from '../design-tokens/font-size.vue';
import FontWeight from '../design-tokens/font-weight.vue';
import Spacing from '../design-tokens/spacing.vue';

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.component('InputComponents', InputComponents);
  Vue.component('ColorPalette', ColorPalette);
  Vue.component('FontSize', FontSize);
  Vue.component('FontWeight', FontWeight);
  Vue.component('Spacing', Spacing);
};
