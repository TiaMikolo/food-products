import classNames from 'classnames'
import Badge from '../Badge/Badge'
import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './RecentMessage.css'

const RecentMessage = ({
  name,
  text,
  time,
  number,
  onClick,
  orange = false,
  orangeGray = false,
  green = false,
  haveBadge = false,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={onClick}>
      <div>
        <CustomAvatar
          user={name}
          classNameRoot={classNames(classes.avatar, {
            [classes.avatarOrange]: orange,
            [classes.avatarOrangeGray]: orangeGray,
            [classes.avatarGreen]: green,
          })}
          classNameDot={classNames(classes.greenDot, {
            [classes.dotOrange]: orange,
            [classes.dotGray]: orangeGray,
          })}
        />
      </div>
      <div className={classes.typographyAndNotificationContainer}>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="name" text={name} />
          <CustomTypography type="littleLabel" text={time} />
        </div>
        <div className={classes.typographyAndNotification}>
          <CustomTypography type="text" text={text} />
          <Badge number={number} classBadge={{ [classes.badgeNone]: haveBadge }} />
        </div>
      </div>
    </div>
  )
}

export default RecentMessage
