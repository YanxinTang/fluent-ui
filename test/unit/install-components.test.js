import components from '../../components.json';

describe('import components', () => {
  const componentMethod = jest.fn();
  const _Vue = { component: componentMethod };
  beforeEach(() => {
    componentMethod.mockClear();
  });

  test('use components on damand', async () => {
    for (const path of Object.values(components)) {
      const { default: Component } = await import(path);
      // eslint-disable-next-line
      expect(Component.hasOwnProperty('install')).toBe(true);
      expect(Component.install instanceof Function).toBe(true);
      Component.install(_Vue);
      expect(componentMethod).toHaveBeenCalledWith(Component.name, Component);
    }
  });

  test('use library', async () => {
    const { default: libInstall } = await import('@/index');
    libInstall(_Vue);
    expect(componentMethod).toHaveBeenCalledTimes(Object.keys(components).length);
  });
});
