import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './UserRole.css'

const UserRole = ({ role, name, icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomTypography type="text" text={role} classNameText={classes.role} />
      <div className={classes.nameIconContainer}>
        {' '}
        <CustomTypography type="text" text={name} classNameText={classes.name} />
        <CustomTypography type="indicator" text={icon} classNameIndicator={classes.icon} />
      </div>
    </div>
  )
}

export default UserRole
