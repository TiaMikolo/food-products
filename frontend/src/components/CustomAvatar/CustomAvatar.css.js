import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg,#E6F0FF,#BAD4FF)',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    position: 'relative',
    color: '#1677FF',
    fontWeight: 700,
    fontSize: '13px',
    fontFamily: 'DM Sans,sans-serif',
  },
  greenDot: {
    backgroundColor: 'chartreuse',
    width: '11px',
    height: '11px',
    position: 'absolute',
    bottom: '0px',
    right: '1px',
    borderRadius: '50%',
  },
}))
