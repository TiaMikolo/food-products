import { useStyles } from './AddButton.css'

const AddButton = ({ content, onClick }) => {
  const classes = useStyles()
  return (
    <button className={classes.button} onClick={onClick}>
      {content}
    </button>
  )
}

export default AddButton
