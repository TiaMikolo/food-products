import { useStyles } from './CustomAvatar.css'

const CustomAvatar = ({ user }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {user}
      <div className={classes.greenDot}></div>
    </div>
  )
}

export default CustomAvatar
