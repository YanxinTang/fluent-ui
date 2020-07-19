import { mount } from '@vue/test-utils';
import Button from '@packages/Button';

describe('Button', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
