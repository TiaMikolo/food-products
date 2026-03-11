import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  bubble: {
    padding: '9px 13px',
    fontSize: '13px',
    lineHeight: 1.5,
    maxWidth: '290px',
    fontFamily: 'DM Sans, sans-serif',
  },
  bubbleMe: {
    background: '#1677FF',
    color: 'white',
    borderRadius: '16px 16px 4px 16px',
    boxShadow: '0 2px 8px rgba(22, 119, 255, 0.28)',
  },
  bubbleThem: {
    background: 'white',
    color: ' #1A1A2E',
    border: '1px solid #E8ECF0',
    borderRadius: '16px 16px 16px 4px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
  },
  bubbleThemContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '8px',
  },
  bubbleMeContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '8px',
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: '32px',
    height: '32px',
    fontSize: '10px',
  },
  time: {
    fontSize: '9px',
    color: '#B0BAC9',
    padding: '0 3px',
  },
}))
