import { mount } from '@vue/test-utils';
import Checkbox from '@components/Checkbox';

describe('Checkbox', () => {
  test('create', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.classes()).toContain('checkbox');
    ['checkbox--checked', 'checkbox--disabled', 'checkbox--focus'].forEach((className) => {
      expect(wrapper.classes()).not.toContain(className);
    });
  });

  test('disabled', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain('checkbox--disabled');
  });

  test('default checked', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        checked: true,
      },
    });

    expect(wrapper.classes()).toContain('checkbox--checked');
  });

  test('label text', () => {
    const labelText = 'label text';
    const wrapper = mount(Checkbox, {
      slots: {
        default: labelText,
      },
    });
    expect(wrapper.find('.checkbox__text').exists()).toBe(true);
    expect(wrapper.find('.checkbox__text').text()).toBe(labelText);
  });

  test('focus and blur event', async () => {
    const wrapper = mount(Checkbox);
    const input = wrapper.find('input[type="checkbox"]');
    expect(wrapper.vm.focus).toBe(false);

    await input.trigger('focus');
    expect(wrapper.vm.focus).toBe(true);
    expect(wrapper.classes()).toContain('checkbox--focus');

    await input.trigger('blur');
    expect(wrapper.vm.focus).toBe(false);
    expect(wrapper.classes()).not.toContain('checkbox--focus');
  });

  test('change event', async () => {
    const wrapper = mount(Checkbox);
    await wrapper.trigger('click');
    expect(wrapper.classes()).toContain('checkbox--checked');
    expect(wrapper.vm.checkboxValue).toBe(true);
  });

  test('change event for disabled checkbox', async () => {
    const wrapper = mount(Checkbox, { propsData: { disabled: true } });
    await wrapper.trigger('click');
    expect(wrapper.classes()).not.toContain('checkbox--checked');
    expect(wrapper.vm.checkboxValue).toBe(false);
  });

  test('v-model bind boolean', async () => {
    const Context = {
      template: `<Checkbox v-model="checked"/>`,
      components: { Checkbox },
      data() {
        return {
          checked: true,
        };
      },
    };
    const wrapper = mount(Context);
    const checkboxWapper = wrapper.findComponent(Checkbox);
    expect(checkboxWapper.vm.checkboxValue).toBe(true);
    await checkboxWapper.trigger('click');
    expect(checkboxWapper.vm.checkboxValue).toBe(false);
    expect(wrapper.vm.checked).toBe(false);
  });

  test('v-model bind array', async () => {
    const Context = {
      template: `<div><Checkbox v-for="city in cities" :key="city" :label="city" v-model="checkedCities"/></div>`,
      components: { Checkbox },
      data() {
        return {
          cities: ['北京', '上海', '广州', '深圳'],
          checkedCities: ['北京'],
        };
      },
    };
    const wrapper = mount(Context);
    const checkboxWappers = wrapper.findAllComponents(Checkbox);
    expect(checkboxWappers.at(0).classes()).toContain('checkbox--checked');
    await checkboxWappers.at(1).trigger('click');
    expect(checkboxWappers.at(1).classes()).toContain('checkbox--checked');
    expect(wrapper.vm.checkedCities).toEqual(['北京', '上海']);
    await checkboxWappers.at(1).trigger('click');
    expect(checkboxWappers.at(1).classes()).not.toContain('checkbox--checked');
    expect(wrapper.vm.checkedCities).toEqual(['北京']);
  });
});
