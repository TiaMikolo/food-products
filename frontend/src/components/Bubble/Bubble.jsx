import classNames from 'classnames'
import { useStyles } from './Bubble.css'
import CustomAvatar from '../CustomAvatar/CustomAvatar'

const Bubble = ({ type, message, name, time }) => {
  const classes = useStyles()
  switch (type) {
    case 'bubbleMe':
      return (
        <div className={classes.bubbleMeContainer}>
          <div className={classNames(classes.bubbleMe, classes.bubble)}>{message}</div>
          <span className={classes.time}>{time}</span>
        </div>
      )
    case 'bubbleThem':
      return (
        <div className={classes.bubbleThemContainer}>
          <CustomAvatar user={name} classNameRoot={classes.avatar} />
          <div className={classNames(classes.bubbleThem, classes.bubble)}>{message}</div>
          <span className={classes.time}>{time}</span>
        </div>
      )
    default:
      return (
        <div className={classes.bubbleMeContainer}>
          <div className={classNames(classes.bubbleMe, classes.bubble)}>{message}</div>
          <span className={classes.time}>{time}</span>
        </div>
      )
  }
}

export default Bubble
