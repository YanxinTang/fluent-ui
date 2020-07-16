import FluentUI from '../../src';
import icons from '@/style/icon.json';

import '@/style/index.scss';

export default ({ Vue }) => {
  Vue.prototype.$icons = icons;
  Vue.use(FluentUI);
};
