import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '9px',
    padding: '8px 10px',
    borderRadius: '9px',
    fontSize: '12px',
    '&:hover': {
      cursor: 'pointer',
      background: '#F5F7FA',
    },
  },
  containerDanger: {
    color: ' #FF4D4F !important',
  },
  containerNoDanger: {
    color: ' #1A1A2E',
  },
}))
