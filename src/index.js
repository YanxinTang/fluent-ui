import Button from '@components/Button';
import Row from '@components/Row';
import Col from '@components/Col';
import Checkbox from '@components/Checkbox';
import Radio from '@components/Radio';
import Toggle from '@components/Toggle';

const components = {
  Button,
  Row,
  Col,
  Checkbox,
  Radio,
  Toggle,
};

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};

export default install;
export { bindFocusEvents } from './focusEvents';
