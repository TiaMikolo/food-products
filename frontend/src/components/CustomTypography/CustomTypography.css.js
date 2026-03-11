import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  name: {
    color: ' #1A1A2E',
    fontWeight: 700,
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
  },
  indicator: {
    color: '#52C41A',
    fontSize: '10px',
    fontFamily: 'DM Sans, sans-serif',
  },
  text: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '11px',
    color: '#8A94A6',
  },
  litleLabel: {
    fontFamily: 'DM Sans, sans-serif',
    color: '#B0BAC9',
    fontSize: '10px',
  },
  icon: {
    background: '#F0F4FF',
    color: ' #1677FF',
    width: '26px',
    height: '26px',
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
