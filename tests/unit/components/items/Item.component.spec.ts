import { ItemInterface } from '@/models/items/Item.interface'
import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/items/children/Item.component.vue'
describe('Item.component.vue', () => {
  it('renders an Item correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }
    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model
      }
    })
    expect(wrapper.text()).toMatch('Unit test item 1')
  })
})
