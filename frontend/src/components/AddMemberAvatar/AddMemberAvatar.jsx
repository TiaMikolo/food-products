import { useStyles } from './AddMemberAvatar.css'

const AddMemberAvatar = ({ addIcon, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.root} onClick={onClick}>
      {addIcon}
    </div>
  )
}

export default AddMemberAvatar
