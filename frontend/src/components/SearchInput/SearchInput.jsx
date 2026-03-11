import { useStyles } from './SearchInput.css'

const SearchInput = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Rechercher..." className={classes.root} />
    </div>
  )
}

export default SearchInput
