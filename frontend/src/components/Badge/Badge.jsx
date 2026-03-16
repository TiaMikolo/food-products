import classNames from 'classnames'
import { useStyles } from './Badge.css'

const Badge = ({ number, classBadge }) => {
  const classes = useStyles()
  return <span className={classNames(classes.notification, classBadge)}>{number}</span>
}

export default Badge
