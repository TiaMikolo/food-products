import Badge from '../Badge/Badge'
import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './RecentMessage.css'

const RecentMessage = ({ name, text, time, number }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div>
        <CustomAvatar user={name} classNameRoot={classes.avatar} />
      </div>
      <div className={classes.typographyAndNotificationContainer}>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="name" text={name} />
          <CustomTypography type="littleLabel" text={time} />
        </div>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="text" text={text} />
          <Badge number={number} />
        </div>
      </div>
    </div>
  )
}

export default RecentMessage
