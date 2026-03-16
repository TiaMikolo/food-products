import { useStyles } from './MessageBar.css'

const MessageBar = ({ placeholder, firstIcon, secondIcon, thirdIcon }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <span className={classes.icon}>{firstIcon}</span>
      <span className={classes.icon}>{secondIcon}</span>
      <input type="text" placeholder={placeholder} className={classes.input} />
      <div className={classes.button}>{thirdIcon}</div>
    </div>
  )
}

export default MessageBar
