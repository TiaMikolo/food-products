import CustomAvatar from '../CustomAvatar/CustomAvatar'
import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './OnlineFriends.css'

const OnlineFriends = ({ name, indicator, firstIcon, lastIcon }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomAvatar user={name} />
      <div className={classes.nameAndIndicator}>
        <CustomTypography type="name" text={name} />
        <CustomTypography
          type="indicator"
          text={indicator}
          classNameIndicator={classes.indicator}
        />
      </div>
      <div className={classes.iconsContainer}>
        <CustomTypography type="icon" text={firstIcon} />
        <CustomTypography type="icon" text={lastIcon} classNameIcon={classes.lastIcon} />
      </div>
    </div>
  )
}

export default OnlineFriends
