import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './UserRole.css'

const UserRole = ({ role, placeholder, button }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomTypography type="text" text={role} classNameText={classes.role} />
      <div className={classes.inputButtonContainer}>
        <input placeholder={placeholder} className={classes.input} />
        <span className={classes.button}>{button}</span>
      </div>
    </div>
  )
}

export default UserRole
