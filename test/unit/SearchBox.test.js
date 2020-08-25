import { mount } from '@vue/test-utils';
import SearchBox from '@components/SearchBox';

describe('SearchBox', () => {
  test('create', () => {
    const wrapper = mount(SearchBox);
    expect(wrapper.classes()).toContain('searchbox');
  });

  test('v-model', async () => {
    const Context = {
      components: { SearchBox },
      template: `<SearchBox v-model="searchBoxVal" />`,
      data() {
        return {
          searchBoxVal: '',
        };
      },
    };
    const contextWrapper = mount(Context);
    const searchBoxWrapper = contextWrapper.findComponent(SearchBox);
    const searchInput = searchBoxWrapper.find('input');

    // start test
    contextWrapper.vm.searchBoxVal = 'test';
    await contextWrapper.vm.$nextTick();
    expect(searchInput.element.value).toBe('test');

    await searchInput.setValue('some value');
    expect(contextWrapper.vm.searchBoxVal).toBe('some value');
  });

  test('disabled', async () => {
    const Context = {
      components: { SearchBox },
      template: `<SearchBox v-model="searchBoxVal" disabled/>`,
      data() {
        return {
          searchBoxVal: '',
        };
      },
    };
    const contextWrapper = mount(Context);
    const searchBoxWrapper = contextWrapper.findComponent(SearchBox);
    const searchInput = searchBoxWrapper.find('input');

    // disalbed search box can be set value by view-model
    contextWrapper.vm.searchBoxVal = 'test';
    await contextWrapper.vm.$nextTick();
    expect(searchInput.element.value).toBe('test');
    contextWrapper.vm.searchBoxVal = '';
    await contextWrapper.vm.$nextTick();
    expect(searchInput.element.value).toBe('');

    // disabled search box can not be set value by view
    await searchInput.setValue('some value');
    expect(contextWrapper.vm.searchBoxVal).toBe('');
  });

  test('SearchBox with default icon', () => {
    const wrapper = mount(SearchBox);
    const defaultIcon = 'icon-Search';
    expect(wrapper.find(`.icon.${defaultIcon}`).exists()).toBe(true);
  });

  test('SearchBox with custom icon', () => {
    const customIcon = 'icon-Filter';
    const wrapper = mount(SearchBox, {
      propsData: {
        icon: customIcon,
      },
    });
    expect(wrapper.find(`.icon.${customIcon}`).exists()).toBe(true);
  });

  test('underlined SearchBox', () => {
    const wrapper = mount(SearchBox, {
      propsData: {
        underlined: true,
      },
    });
    expect(wrapper.classes()).toContain('searchbox--underlined');
  });

  test('search event', () => {
    const searchHandler = jest.fn();
    const Context = {
      components: { SearchBox },
      template: `<SearchBox @search="searchHandler"/>`,
      methods: {
        searchHandler,
      },
    };
    const searchBoxWrapper = mount(Context);
    const searchInputWrapper = searchBoxWrapper.find('input');
    searchInputWrapper.trigger('keydown.enter');
    expect(searchHandler).toHaveBeenCalled();
  });

  test('escape event', () => {
    const escapeHandler = jest.fn();
    const Context = {
      components: { SearchBox },
      template: `<SearchBox @escape="escapeHandler" />`,
      methods: {
        escapeHandler,
      },
    };
    const searchBoxWrapper = mount(Context);
    const searchInputWrapper = searchBoxWrapper.find('input');

    // triggered by keydown event
    searchInputWrapper.trigger('keydown.esc');
    expect(escapeHandler).toHaveBeenCalled();
  });

  test('clear button click event', async () => {
    const escapeHandler = jest.fn();
    const Context = {
      components: { SearchBox },
      template: `<SearchBox @escape="escapeHandler" value="some value"/>`,
      methods: {
        escapeHandler,
      },
    };
    const searchBoxWrapper = mount(Context, {
      attachTo: document.body,
    });
    const searchInputWrapper = searchBoxWrapper.find('input');
    const clearButtonWrapper = searchBoxWrapper.find('.searchbox__clear-button .button');

    clearButtonWrapper.trigger('click');
    expect(escapeHandler).toHaveBeenCalled();
    expect(searchInputWrapper.element.isSameNode(document.activeElement)).toBe(true);
  });
});
