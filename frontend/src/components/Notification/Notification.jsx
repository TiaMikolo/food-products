import { useStyles } from './Notification.css'

const Notification = ({ number }) => {
  const classes = useStyles()
  return <span className={classes.notification}>{number}</span>
}

export default Notification
