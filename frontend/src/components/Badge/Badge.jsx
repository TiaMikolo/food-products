import { useStyles } from './Badge.css'

const Badge = ({ number }) => {
  const classes = useStyles()
  return <span className={classes.notification}>{number}</span>
}

export default Badge
