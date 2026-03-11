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
    gap: '5px',
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
}))
