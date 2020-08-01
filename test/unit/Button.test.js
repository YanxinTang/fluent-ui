import { mount } from '@vue/test-utils';
import Button from '@components/Button';

describe('Button', () => {
  test('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('button');
  });

  test('plain button', () => {
    const wrapper = mount(Button, {
      propsData: {
        plain: true,
      },
    });
    expect(wrapper.classes()).toContain('button--plain');
  });

  test('primary button', () => {
    const wrapper = mount(Button, {
      propsData: {
        primary: true,
      },
    });
    expect(wrapper.classes()).toContain('button--primary');
  });

  test('compound button', () => {
    const secondaryText = 'This is the secondary text.';
    const wrapper = mount(Button, {
      propsData: {
        secondaryText,
      },
    });
    expect(wrapper.find('.button__description').exists()).toBe(true);
    expect(wrapper.find('.button__description').text()).toBe(secondaryText);
  });

  test('icon button', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'Mail',
      },
    });
    expect(wrapper.find('.button__label>.icon.icon-Mail').exists()).toBe(true);
  });

  test('disabled button', () => {
    const mockClickHandler = jest.fn();
    const Context = {
      template: `<Button @click="clickHandler" disabled />`,
      components: { Button },
      methods: {
        clickHandler: mockClickHandler,
      },
    };
    const wrapper = mount(Context);
    const buttonWrapper = wrapper.findComponent(Button);
    buttonWrapper.trigger('click');
    expect(mockClickHandler.mock.calls.length).toBe(0);
  });

  test('click event', () => {
    const mockClickHandler = jest.fn();
    const Context = {
      template: `<Button @click="clickHandler" />`,
      components: { Button },
      methods: {
        clickHandler: mockClickHandler,
      },
    };
    const wrapper = mount(Context);
    const buttonWrapper = wrapper.findComponent(Button);
    buttonWrapper.trigger('click');
    expect(mockClickHandler.mock.calls.length).toBe(1);
  });
});
