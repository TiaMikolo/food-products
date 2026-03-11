import { useStyles } from './CustomTypography.css'

const CustomTypography = ({ text }) => {
  const classes = useStyles()
  return <div className={classes.name}>{text}</div>
}

export default CustomTypography
