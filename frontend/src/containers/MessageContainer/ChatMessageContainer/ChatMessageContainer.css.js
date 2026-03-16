import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    position: 'relative',
  },
  chatHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    borderBottom: '1px solid #E8ECF0',
    padding: '12px 20px',
  },
  avatar: {
    width: '44px',
    height: '44px',
  },
  indicator: {
    fontSize: '11px',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '7px',
  },
  bodyMessage: {
    background: '#F5F7FA',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    height: 'calc(100% - 225px)',
    overflowY: 'auto',
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome / Safari
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
    padding: '12px 20px',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    background: 'white',
  },
  inputRoleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    right: 0,
    left: 0,
  },
}))
