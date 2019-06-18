import { mount } from '@vue/test-utils';
import karbonDateInput from '@/components/form-controls/karbon-date-input.vue';

describe('karbonDateInput', () => {
  test('name prop', () => {
    const wrapper = mount(karbonDateInput, {
      propsData: {
        name: 'queryFrom',
      },
    });
    const nameProp = wrapper.vm.$options.props.name
    expect(nameProp.type).toBe(String)
    expect(wrapper.find('#picker').attributes().name).toBe('queryFrom')
  })

  test('value prop', () => {
    const wrapper = mount(karbonDateInput, {
      propsData: {
        name: 'queryFrom',
        value: '2019-6-6'
      }
    });
    const valueProp = wrapper.vm.$options.props.value
    expect(valueProp.default).toBe(undefined)
    expect(valueProp.type).toEqual([String, Date])
    expect(wrapper.find('#picker').element.value).toBe('06 Jun 2019')
  })

  test('placeholder prop', () => {
    const wrapper = mount(karbonDateInput, {
      propsData: {
        placeholder: 'From'
      }
    });
    expect(wrapper.find('.label').text()).toBe('From')
  })

  test('error display feature', () => {
    const wrapper = mount(karbonDateInput);
    expect(wrapper.find('.error-message').exists()).toBe(false)
    wrapper.setProps({ error: 'Some Error' })
    expect(wrapper.find('.error-message').isVisible()).toBe(true)
    expect(wrapper.find('.error-message').text()).toBe('Some Error')
  })
})
