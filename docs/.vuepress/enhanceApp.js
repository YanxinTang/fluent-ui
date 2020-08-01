import FluentUI from '@';
import icons from '@/themes/fluent-ui/icon.json';

import '@/themes/fluent-ui/index.scss';

export default ({ Vue }) => {
  Vue.prototype.$icons = icons;
  Vue.use(FluentUI);
};
