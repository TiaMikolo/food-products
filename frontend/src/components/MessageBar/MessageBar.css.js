import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    background: '#F5F7FA',
    border: '1px solid #E8ECF0',
    borderRadius: '11px',
    padding: '8px 11px',
  },
  icon: {
    fontSize: '16px',
    color: '#B0BAC9',
    height: '21px',
  },
  input: {
    flex: 1,
    fontSize: '12.5px',
    color: '#C0C8D4',
    fontFamily: 'DM Sans,sans-serif',
    height: '14px',
    border: 'none',
    background: '#F5F7FA',
    outline: 'none',
    '&::placeholder': {
      color: '#C0C8D4',
    },
  },
  button: {
    width: '34px',
    height: '34px',
    borderRadius: '9px',
    background: '#1677FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '13px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
