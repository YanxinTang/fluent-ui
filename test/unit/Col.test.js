import { mount } from '@vue/test-utils';
import Row from '@components/Row';
import Col from '@components/Col';

describe('Button', () => {
  test('create', () => {
    const wrapper = mount(Col);
    expect(wrapper.classes()).toContain('col');
  });

  test('span', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: 1,
      },
    });
    expect(wrapper.classes()).toContain('col-1');
  });

  test('offset', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: 1,
      },
    });
    expect(wrapper.classes()).toContain('col-offset-1');
  });

  test('grid span number', () => {
    const sizeConfig = {};
    ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
      sizeConfig[size] = Math.floor(Math.random() * 13);
    });
    const wrapper = mount(Col, {
      propsData: {
        ...sizeConfig,
      },
    });
    const classes = wrapper.classes();
    for (const [size, val] of Object.entries(sizeConfig)) {
      expect(classes).toContain(`col-${size}-${val}`);
    }
  });

  test('grid span object', () => {
    const sizeConfig = {};
    ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
      sizeConfig[size] = {
        span: Math.floor(Math.random() * 13),
        offset: Math.floor(Math.random() * 13),
      };
    });
    const wrapper = mount(Col, {
      propsData: {
        ...sizeConfig,
      },
    });
    const classes = wrapper.classes();
    for (const [size, val] of Object.entries(sizeConfig)) {
      expect(classes).toContain(`col-${size}-${val.span}`);
      expect(classes).toContain(`col-${size}-offset-${val.offset}`);
    }
  });

  test('gutter', () => {
    const gutter = '10px';
    const wrapper = mount({
      template: `<Row :gutter="gutter"><Col></Col></Row>`,
      components: { Row, Col },
      data() {
        return {
          gutter,
        };
      },
    });
    const colWrapper = wrapper.findComponent(Col);
    expect(colWrapper.element.style.padding).toBe(gutter);
  });
});
