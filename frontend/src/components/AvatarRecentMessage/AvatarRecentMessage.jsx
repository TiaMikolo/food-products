import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import Notification from '../Notification/Notification'
import { useStyles } from './AvatarRecentMessage.css'

const AvatarRecentMessage = ({ user, name, text, time, number }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div>
        <CustomAvatar user={user} classNameRoot={classes.avatar} />
      </div>
      <div className={classes.typographyAndNotificationContainer}>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="name" text={name} />
          <CustomTypography type="littleLabel" text={time} />
        </div>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="text" text={text} />
          <Notification number={number} />
        </div>
      </div>
    </div>
  )
}

export default AvatarRecentMessage
