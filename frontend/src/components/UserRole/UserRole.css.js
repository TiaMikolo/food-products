import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    width: '247px',
    height: '32px',
  },
  role: {
    color: '#B0BAC9',
    minWidth: '50px',
    height: '13px',
  },
  nameIconContainer: {
    flex: 1,
    background: ' #F5F7FA',
    border: '1px solid #E8ECF0',
    borderRadius: '8px',
    padding: '6px 10px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '16px',
  },
  name: {
    color: '#1A1A2E',
    fontSize: '12px',
  },
  icon: {
    color: ' #B0BAC9',
    width: '9.60px',
    height: '18px',
  },
}))
