import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '11px',
    border: '1px solid #E8ECF0',
    marginBottom: '8px',
    cursor: 'pointer',
    width: '217px',
    height: '48px',
    '&:hover': {
      background: '#F5F7FA',
    },
  },
  icon: {
    background: ' #E6F0FF',
  },
  member: {
    color: '#B0BAC9',
    marginTop: '2px',
  },
  message: {
    color: '#8A94A6;',
    fontSize: '10.5px',
  },
  labelContainer: {
    flex: 1,
    minWidth: 0,
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    fontSize: '9px',
  },
  badgeContainerNone: {
    display: 'none',
  },
  badge: {
    padding: '1px 5px',
  },
}))
