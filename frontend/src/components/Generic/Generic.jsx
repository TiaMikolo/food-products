import classNames from 'classnames'
import { useStyles } from './Generic.css'

const Generic = ({ icon, text, danger = false, onClick }) => {
  const classes = useStyles()
  return (
    <div
      className={classNames(classes.container, classes.containerNoDanger, {
        [classes.containerDanger]: danger,
      })}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default Generic
