import Button from '@packages/Button';
import { Row, Col } from '@packages/Grid';

const components = {
  Button,
  Row,
  Col,
};

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

export default install;
