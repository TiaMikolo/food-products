import { useStyles } from './IconButton.css'

const IconButton = ({ icon, onClick }) => {
  const classes = useStyles()
  return (
    <button className={classes.button} onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
