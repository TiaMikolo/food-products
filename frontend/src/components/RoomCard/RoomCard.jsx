import Badge from '../Badge/Badge'
import CustomTypography from '../CustomTypography/CustomTypography'
import RoomIcon from '../RoomIcon/RoomIcon'
import { useStyles } from './RoomCard.css'

const RoomCard = ({ icon, roomName, member, message, number, haveBadge = false, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={onClick}>
      <RoomIcon icon={icon} classIcon={classes.icon} />
      <div className={classes.labelContainer}>
        <CustomTypography type="name" text={roomName} />
        <CustomTypography type="indicator" text={member} classNameIndicator={classes.member} />
        <CustomTypography type="indicator" text={message} classNameIndicator={classes.message} />
      </div>
      <div className={haveBadge ? classes.badgeContainer : classes.badgeContainerNone}>
        <Badge number={number} classBadge={classes.badge} />
      </div>
    </div>
  )
}

export default RoomCard
