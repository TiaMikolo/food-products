import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  root: {
    width: '232px',
    height: '378px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '232px',
    objectFit: 'cover',
  },
}))