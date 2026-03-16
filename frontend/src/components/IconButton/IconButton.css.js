import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  button: {
    width: '34px',
    height: '34px',
    borderRadius: '9px',
    border: '1px solid #E8ECF0',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
      background: '#F5F7FA',
    },
  },
}))
