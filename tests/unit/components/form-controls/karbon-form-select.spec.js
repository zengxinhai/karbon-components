import { shallowMount } from '@vue/test-utils';
import karbonFormSelect from '@/components/form-controls/karbon-form-select.vue';

const name = 'Funded-Type'
const options = [
  { value: 1, text: 'one' },
  { value: 2, text: 'two' },
  { value: 3, text: 'three' }
]

describe('karbonFormSelect Component', () => {
  test('name prop', () => {
    const wrapper = shallowMount(karbonFormSelect, { propsData: { name, options } });
    const nameProp = wrapper.vm.$options.props.name
    expect(nameProp.required).toBe(undefined)
    expect(nameProp.type).toBe(String)
    expect(wrapper.find('select').attributes().name).toBe('Funded-Type')
  })

  test('value prop', () => {
    const wrapper = shallowMount(karbonFormSelect, { propsData: { name, options } });
    const valueProp = wrapper.vm.$options.props.value
    expect(valueProp.type).toEqual([String, Number])
    expect(wrapper.find('select').element.value).toBe('')
  })

  test('options prop', () => {
    const wrapper = shallowMount(karbonFormSelect, { propsData: { name, options } });
    const optionsProp = wrapper.vm.$options.props.options
    expect(optionsProp.type).toBe(Array)
    const select = wrapper.find('select').element
    expect(select[1]._value).toBe(1)
    expect(select[2]._value).toBe(2)
    expect(select[3]._value).toBe(3)
  })

  test('error display feature', () => {
    const wrapper = shallowMount(karbonFormSelect, { propsData: { name, options } });
    expect(wrapper.find('.error-message').exists()).toBe(false)
    wrapper.setProps({ error: 'Some Error' })
    expect(wrapper.find('.error-message').isVisible()).toBe(true)
    expect(wrapper.find('.error-message').text()).toBe('Some Error')
  })

  test('event emits', () => {
    const wrapper = shallowMount(karbonFormSelect, { propsData: { name, options } });
    const select = wrapper.find(`[name=${name}]`)
    select.element.value = 3
    select.trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')[0][0]).toEqual("3")
  })
})
