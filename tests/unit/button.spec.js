import { shallowMount } from '@vue/test-utils'
import Button from '@/components/ui/atoms/Button.vue'

describe('Button', () => {
  it('renders text and color', () => {
    const label = 'yay'
    const color = '#000000'
    const wrapper = shallowMount(Button, {
      propsData: { label, color },
    })
    expect(wrapper.html()).toMatch(label)
    expect(wrapper.props().color).toMatch(color)
  })
})
