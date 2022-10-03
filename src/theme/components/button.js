import colors from '../foundations/colors';

export const Button = {
  baseStyle: {
    fontWeight: '300',
    color: `${colors.base.white}`,
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    primary: {
      bg: `${colors.brand[50]}`,
    },
    secondary: {
      bg: `${colors.brand[100]}`,
    },
    sm: {
      bg: 'teal.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
    colorScheme: 'green',
  },
};
