import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    position: 'relative',
    '&:before': {
      content: '"🔍"',
      position: 'absolute',
      left: '11px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '16px',
    },
  },
  root: {
    width: '-webkit-fill-available',
    height: '16px',
    borderRadius: '9px',
    border: '1px solid #E8ECF0',
    background: ' #F5F7FA',
    color: '#B0BAC9',
    padding: '7px 11px',
    fontSize: '12px',
    fontFamily: 'DM Sans,sans-serif',
    paddingLeft: '39px',
    outline: 'none',
    '&::placeholder': {
      color: '#C0C8D4',
    },
  },
}))
