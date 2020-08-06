import { mount } from '@vue/test-utils';
import Toggle from '@components/Toggle';

describe('Toggle', () => {
  test('create basic toggle', async () => {
    const wrapper = mount(Toggle);
    expect(wrapper.classes()).toContain('toggle');
    ['toggle--checked', 'toggle--disabled', 'toggle--focus', 'toggle--inline', 'toggle--with-state-text'].forEach(
      className => {
        expect(wrapper.classes()).not.toContain(className);
      }
    );

    await wrapper.trigger('click');
    expect(wrapper.classes()).toContain('toggle--checked');
  });

  test('use v-model bind value for toggle', async () => {
    const trueValue = 'trueValue';
    const falseValue = 'falseValue';
    const onText = 'On';
    const offText = 'Off';
    const wrapper = mount({
      template: '<Toggle v-model="value" v-bind="props"/>',
      components: { Toggle },
      data() {
        return {
          props: {
            trueValue: trueValue,
            falseValue: falseValue,
            onText: onText,
            offText: offText,
          },
          value: trueValue,
        };
      },
    });
    const toggleWrapper = wrapper.findComponent(Toggle);
    expect(toggleWrapper.classes()).toContain('toggle--checked');
    expect(toggleWrapper.find('.toggle__state-text').text()).toBe(onText);
    await toggleWrapper.trigger('click');
    expect(toggleWrapper.classes()).not.toContain('toggle--checked');
    expect(wrapper.vm.value).toBe(falseValue);
    expect(toggleWrapper.find('.toggle__state-text').text()).toBe(offText);

    wrapper.vm.value = trueValue;
    await wrapper.vm.$nextTick();
    expect(toggleWrapper.classes()).toContain('toggle--checked');
  });

  test('disabled toggle', async () => {
    const wrapper = mount(Toggle, {
      propsData: {
        disabled: true,
        checked: true,
      },
    });
    expect(wrapper.classes()).toContain('toggle--checked');
    expect(wrapper.classes()).toContain('toggle--disabled');
    await wrapper.trigger('click');
    expect(wrapper.classes()).toContain('toggle--checked');
    wrapper.vm.selfModel = wrapper.vm.falseValue;
    expect(wrapper.classes()).toContain('toggle--checked');
  });
});
