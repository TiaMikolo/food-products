import AvatarSegmented from '../../../components/AvatarSegmented/AvatarSegmented'
import EditButton from '../../../components/EditButton/EditButton'
import { useStyles } from './LeftMessageContainer.css'

const LeftMessageContainer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.avatarEditButtonContainer}>
        <AvatarSegmented user="Ayoton" name="Ayoton" indicator="● En ligne" />
        <EditButton content="✏️" />
      </div>
      <div>n</div>
      <div>n</div>
    </div>
  )
}

export default LeftMessageContainer
