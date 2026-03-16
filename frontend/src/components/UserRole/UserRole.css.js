import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    width: '100%',
    height: '32px',
  },
  role: {
    color: '#B0BAC9',
    minWidth: '50px',
    height: '13px',
  },
  inputButtonContainer: {
    flex: 1,
    background: ' #F5F7FA',
    border: '1px solid #E8ECF0',
    borderRadius: '8px',
    padding: '6px 9px',
    fontSize: '12px',
    color: '#1A1A2E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    border: 'none',
    background: ' #F5F7FA',
    outline: 'none',
    fontSize: '12px',
    '&::placeholder': {
      fontSize: '12px',
    },
  },
  button: {
    color: '#B0BAC9',
    '&:hover': {
      cursor: 'pointer',
      color: '#1677FF',
    },
  },
}))
