import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '10px',
    marginBottom: '2px',
    width: '261px', //delete after
  },
  typographyAndNotificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  typographyAndNotification: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: '44px',
    height: '44px',
  },
}))
