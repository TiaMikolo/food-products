import { useStyles } from './AddMemberAvatar.css'

const AddMemberAvatar = ({ addIcon }) => {
  const classes = useStyles()
  return <div className={classes.root}>{addIcon}</div>
}

export default AddMemberAvatar
