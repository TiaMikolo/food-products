import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    width: '278px',
    background: 'white',
    borderRight: '1px solid #E8ECF0',
    display: 'flex',
    flexDirection: 'column',
  },
  avatarEditButtonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  topContainer: {
    padding: '16px 14px 12px',
    borderBottom: '1px solid #E8ECF0',
    display: 'flex',
    flexDirection: 'column',
    gap: '11px',
  },
  RecentMessageContainer: {
    padding: '8px',
  },
  line: {
    height: '1px',
    background: '#E8ECF0',
    margin: '10px 4px',
  },
}))
