import Button from '@packages/Button';
import { Row, Col } from '@packages/Grid';
import Checkbox from '@packages/Checkbox';

const components = {
  Button,
  Row,
  Col,
  Checkbox,
};

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

export default install;
