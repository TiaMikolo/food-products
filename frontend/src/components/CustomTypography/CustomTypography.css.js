import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles(() => ({
  textContainer: {
    border: 'solid 2px',
    borderBlockColor: 'black',
    display: 'inline-block',
    maxWidth: '250px',
    whiteSpace: 'normal',
    overflowWrap: 'break-words',
    padding: '5px',
    margin: '5px',
  },
}))
