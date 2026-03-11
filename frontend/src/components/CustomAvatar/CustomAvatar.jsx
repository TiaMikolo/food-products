import getTwoFirstLettres from '../../utils/getTwoFirstLetters'
import { useStyles } from './CustomAvatar.css'

const CustomAvatar = ({ user }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {getTwoFirstLettres(user)}
      <div className={classes.greenDot}></div>
    </div>
  )
}

export default CustomAvatar
