import components from '../../components.json';

describe('import components demand', () => {
  const componentMethod = jest.fn();
  test('import components on damand', async () => {
    const _Vue = { component: componentMethod };

    for (const path of Object.values(components)) {
      const { default: Component } = await import(path);
      // eslint-disable-next-line
      expect(Component.hasOwnProperty('install')).toBe(true);
      expect(Component.install instanceof Function).toBe(true);
      Component.install(_Vue);
      expect(componentMethod).toHaveBeenCalledWith(Component.name, Component);
    }
  });
});
