import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import Checkbox from './components/checkbox';
import styles from './styles';

const overrides = {
  styles,
  components: {
    Button,
    Checkbox,
  },
};

export default extendTheme(overrides);
