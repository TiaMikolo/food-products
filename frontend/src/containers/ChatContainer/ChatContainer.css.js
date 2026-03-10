import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  messageInputContainer: {
    // position: 'fixed',
    // bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  messageInput: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 2px blue',
  },
}))
