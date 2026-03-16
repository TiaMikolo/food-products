import CustomTypography from '../CustomTypography/CustomTypography'
import { useStyles } from './UserRole.css'

const UserRole = ({ role, placeholder, button, onClick, onChange, value }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CustomTypography type="text" text={role} classNameText={classes.role} />
      <div className={classes.inputButtonContainer}>
        <input
          placeholder={placeholder}
          className={classes.input}
          onChange={onChange}
          value={value}
        />
        <span className={classes.button} onClick={onClick}>
          {button}
        </span>
      </div>
    </div>
  )
}

export default UserRole
