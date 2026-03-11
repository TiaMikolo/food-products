import { useStyles } from './SearchInput.css'

const SearchInput = ({ placeholder }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <input type="text" placeholder={placeholder} className={classes.root} />
    </div>
  )
}

export default SearchInput
