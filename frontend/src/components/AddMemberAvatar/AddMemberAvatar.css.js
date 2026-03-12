import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  root: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: ' #F0F4FF',
    border: ' 2px dashed #BAD4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#1677FF',
    cursor: 'pointer',
    '&:hover': {
      cursor: 'pointer',
      background: '#F5F7FA',
    },
  },
}))
