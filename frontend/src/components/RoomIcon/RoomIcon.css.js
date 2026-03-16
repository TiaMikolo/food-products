import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '19px',
    flexShrink: 0,
  },
}))
