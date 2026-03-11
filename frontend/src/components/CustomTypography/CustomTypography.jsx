import { useStyles } from './CustomTypography.css'

const CustomTypography = ({ text, type }) => {
  const classes = useStyles()
  switch (type) {
    case 'name':
      return <div className={classes.name}>{text}</div>
    case 'indicator':
      return <div className={classes.indicator}>{text}</div>
    case 'text':
      return <div className={classes.text}>{text}</div>
    default:
      return <div className={classes.name}>{text}</div>
  }
}

export default CustomTypography
