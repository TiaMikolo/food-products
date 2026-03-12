import classNames from 'classnames'
import { useStyles } from './RoomIcon.css'

const RoomIcon = ({ icon, classIcon }) => {
  const classes = useStyles()
  return <div className={classNames(classes.icon, classIcon)}>{icon}</div>
}

export default RoomIcon
