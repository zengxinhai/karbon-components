import { shallowMount } from '@vue/test-utils';
import karbonFormInput from '@/components/form-controls/karbon-form-input';

describe('karbonFormInput Component', () => {
  test('name prop', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', type: 'text' } });
    const nameProp = wrapper.vm.$options.props.name;
    expect(nameProp.required).toBeTruthy();
    expect(nameProp.type).toBe(String);
    expect(wrapper.find('input').attributes().name).toBe('firstName');
  });

  test('value prop', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', type: 'text' } });
    const valueProp = wrapper.vm.$options.props.value;
    expect(valueProp.default).toBe('');
    expect(valueProp.type).toBe(String);
    expect(wrapper.find('input').element.value).toBe('');
  });

  test('type prop', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'Email', type: 'email' } });
    const typeProp = wrapper.vm.$options.props.type;
    expect(typeProp.default).toBe('text');
    expect(typeProp.type).toBe(String);
    expect(wrapper.find('input').attributes().type).toBe('email');
  });

  test('disabled prop', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', disabled: true } });
    const disabledProp = wrapper.vm.$options.props.disabled;
    expect(disabledProp.default).toBe(false);
    expect(disabledProp.type).toBe(Boolean);
    expect(wrapper.find('input').attributes().disabled).toBe('disabled');
  });

  test('floating label feature', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', type: 'text' } });
    expect(wrapper.find('.label').classes().includes('label-is-show')).toBe(false);
    wrapper.setProps({ value: 'IceFox' });
    expect(wrapper.find('.label').classes().includes('label-is-show')).toBe(true);
  });

  test('error display feature', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', type: 'text' } });
    expect(wrapper.find('.error-message').exists()).toBe(false);
    wrapper.setProps({ error: 'Some Error' });
    expect(wrapper.find('.error-message').isVisible()).toBe(true);
    expect(wrapper.find('.error-message').text()).toBe('Some Error');
  });

  test('event emits', () => {
    const wrapper = shallowMount(karbonFormInput, { propsData: { name: 'firstName', type: 'text' } });
    wrapper.find('input').setValue('IceFox');
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input[0]).toEqual(['IceFox']);
  });
});
