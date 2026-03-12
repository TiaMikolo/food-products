import { useStyles } from './EditButton.css'

const EditButton = ({ content }) => {
  const classes = useStyles()
  return <button className={classes.button}>{content}</button>
}

export default EditButton
