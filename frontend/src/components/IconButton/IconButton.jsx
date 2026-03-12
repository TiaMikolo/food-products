import { useStyles } from './IconButton.css'

const IconButton = ({ icon }) => {
  const classes = useStyles()
  return <button className={classes.button}>{icon}</button>
}

export default IconButton
