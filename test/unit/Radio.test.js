import { mount } from '@vue/test-utils';
import Radio from '@packages/Radio';

describe('Radio', () => {
  test('create', () => {
    const wrapper = mount(Radio);
    expect(wrapper.classes()).toContain('radio');
  });

  test('disabled', () => {
    const wrapper = mount(Radio, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain('radio--disabled');
  });

  test('label text', () => {
    const labelText = 'label text';
    const wrapper = mount(Radio, {
      slots: {
        default: labelText,
      },
    });
    expect(wrapper.find('.radio__text').exists()).toBe(true);
    expect(wrapper.find('.radio__text').text()).toBe(labelText);
  });

  test('radio group', async () => {
    const Context = {
      template: `<div><Radio v-for="city in cities" :key="city" :label="city" v-model="checkedCity"/></div>`,
      components: { Radio },
      data() {
        return {
          cities: ['北京', '上海', '广州', '深圳'],
          checkedCity: '北京',
        };
      },
    };
    const wrapper = mount(Context);
    const radioWappers = wrapper.findAllComponents(Radio);
    expect(radioWappers.at(0).classes()).toContain('radio--checked');
    await radioWappers.at(1).trigger('click');
    expect(radioWappers.at(1).classes()).toContain('radio--checked');
    expect(wrapper.vm.checkedCity).toEqual('上海');
    await radioWappers.at(1).trigger('click');
    expect(radioWappers.at(1).classes()).toContain('radio--checked');
    expect(wrapper.vm.checkedCity).toEqual('上海');
  });
});
