import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '10px',
    marginBottom: '2px',
    '&:hover': {
      backgroundColor: '#F0F4FF',
      cursor: 'pointer',
    },
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
  numberNone: {
    display: 'none',
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
  avatarOrange: {
    background: 'linear-gradient(135deg, #FFF0E6, #FFD4BA)',
    color: '#FA8C16',
  },
  avatarOrangeGray: {
    background: 'linear-gradient(135deg, #FFF0E6, #FFD4BA)',
    color: '#FA8C16',
  },
  avatarGreen: {
    background: 'linear-gradient(135deg, #F0FFE6, #C8F0BA)',
    color: ' #52C41A',
  },
  dotOrange: {
    backgroundColor: '#FA8C16',
  },
  dotGray: {
    backgroundColor: '#C0C8D4',
  },
  badgeNone: {
    display: 'none',
  },
}))
