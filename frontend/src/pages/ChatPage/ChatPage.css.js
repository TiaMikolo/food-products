import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
  },
}))
