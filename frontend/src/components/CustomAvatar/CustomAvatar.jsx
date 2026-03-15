import getTwoFirstLettres from '../../utils/getTwoFirstLetters'
import { useStyles } from './CustomAvatar.css'
import classNames from 'classnames'

const CustomAvatar = ({ user, classNameRoot, classNameDot }) => {
  const classes = useStyles()
  return (
    <div className={classNames(classes.container, classNameRoot)}>
      {getTwoFirstLettres(user)}
      <div className={classNameDot}></div>
    </div>
  )
}

export default CustomAvatar
