import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  root: {
    width: '278px',
    background: 'white',
    borderRight: '1px solid #E8ECF0',
    display: 'flex',
    flexDirection: 'column',
  },
  avatarEditButtonContainer: {
    display: 'flex',
  },
  avatar: {
    flex: 1,
  },
}))
