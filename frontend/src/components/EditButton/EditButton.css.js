import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  button: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: ' #F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
