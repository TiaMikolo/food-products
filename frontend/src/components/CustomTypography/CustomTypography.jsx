import classNames from 'classnames'
import { useStyles } from './CustomTypography.css'

const CustomTypography = ({ text, type, classNameIndicator, classNameIcon, classNameText }) => {
  const classes = useStyles()
  switch (type) {
    case 'name':
      return <div className={classes.name}>{text}</div>
    case 'indicator':
      return <div className={classNames(classes.indicator, classNameIndicator)}>{text}</div>
    case 'text':
      return <div className={classNames(classes.text, classNameText)}>{text}</div>
    case 'littleLabel':
      return <div className={classes.litleLabel}>{text}</div>
    case 'icon':
      return <div className={classNames(classes.icon, classNameIcon)}>{text}</div>
    case 'title':
      return <div className={classes.title}>{text}</div>
    default:
      return <div className={classes.name}>{text}</div>
  }
}

export default CustomTypography
