import { useStyles } from './AddButton.css'

const AddButton = ({ content }) => {
  const classes = useStyles()
  return <button className={classes.button}>{content}</button>
}

export default AddButton
