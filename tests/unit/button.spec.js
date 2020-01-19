import { shallowMount } from '@vue/test-utils'
import Button from '@/components/ui/atoms/Button.vue'

describe('Button', () => {
  it('renders text and color', () => {
    const label = 'yay'
    const type = 'warning'
    const wrapper = shallowMount(Button, {
      propsData: { label, type },
    })
    expect(wrapper.html()).toMatch(label)
    expect(wrapper.props().type).toMatch(type)
  })
})
