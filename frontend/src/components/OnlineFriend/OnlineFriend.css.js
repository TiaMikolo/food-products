import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    width: '246px',
    alignItems: 'center',
    padding: '7px 8px',
    borderRadius: '10px',
    marginBottom: '3px',
    '&:hover': {
      backgroundColor: '#F0F4FF',
      cursor: 'pointer',
    },
  },
  indicator: {
    color: '#B0BAC9',
  },
  nameAndIndicator: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    flex: '1',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
  },
  lastIcon: {
    background: '#FFF1F0',
    color: ' #FF4D4F',
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
}))
