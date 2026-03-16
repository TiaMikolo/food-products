import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #E8ECF0',
    height: '39px',
    width: '100%',
  },
  noCliqued: {
    flex: '1',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '12px',
    fontWeight: 600,
    color: ' #B0BAC9',
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
  },
  cliqued: {
    flex: '1',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '12px',
    fontWeight: 600,
    color: ' #1677FF',
    borderBottom: '2px solid #1677FF',
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
  },
  label: {
    width: '100%',
  },
  containerItem: {
    display: 'flex',
  },
  containerTabs: {
    display: 'flex',
    flexDirection: 'column',
  },
}))
