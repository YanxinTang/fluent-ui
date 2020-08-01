import { mount } from '@vue/test-utils';
import Radio from '@components/Radio';

describe('Radio', () => {
  test('create', () => {
    const wrapper = mount(Radio);
    expect(wrapper.classes()).toContain('radio');
    ['radio--checked', 'radio--disabled', 'radio--focus'].forEach(className => {
      expect(wrapper.classes()).not.toContain(className);
    });
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

  test('focus and blur event', async () => {
    const wrapper = mount(Radio);
    const input = wrapper.find('input[type="radio"]');
    expect(wrapper.vm.focus).toBe(false);

    await input.trigger('focus');
    expect(wrapper.vm.focus).toBe(true);
    expect(wrapper.classes()).toContain('radio--focus');

    await input.trigger('blur');
    expect(wrapper.vm.focus).toBe(false);
    expect(wrapper.classes()).not.toContain('radio--focus');
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
