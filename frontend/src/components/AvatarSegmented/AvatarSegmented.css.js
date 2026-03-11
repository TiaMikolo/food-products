import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
  IndicatorWithName: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
}))
