import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './AvatarSegmented.css'

const AvatarSegmented = ({ user, name, indicator }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomAvatar user={user} />
      <div className={classes.IndicatorWithName}>
        <CustomTypography type="name" text={name} />
        <CustomTypography type="indicator" text={indicator} />
      </div>
    </div>
  )
}

export default AvatarSegmented
