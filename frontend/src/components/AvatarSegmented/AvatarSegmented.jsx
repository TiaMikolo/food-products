import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './AvatarSegmented.css'

const AvatarSegmented = ({ user, name, indicator, classAvatar, classIndicator }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomAvatar user={user} classNameRoot={classAvatar} />
      <div className={classes.IndicatorWithName}>
        <CustomTypography type="name" text={name} />
        <CustomTypography type="indicator" text={indicator} classNameIndicator={classIndicator} />
      </div>
    </div>
  )
}

export default AvatarSegmented
