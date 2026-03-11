import { useState } from 'react'
import { useStyles } from './Tabs.css'

const items = [
  {
    id: '1',
    label: 'Messages',
  },
  {
    id: '2',
    label: 'Amis',
  },
]

const Tabs = () => {
  const [isCliqued, setIsCliqued] = useState('1')

  const onClick = id => {
    setIsCliqued(id)
  }

  const titles = items
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {titles.map(title => (
        <div
          onClick={() => onClick(title.id)}
          key={title.id}
          className={title.id === isCliqued ? classes.cliqued : classes.noCliqued}
        >
          {title.label}
        </div>
      ))}
    </div>
  )
}

export default Tabs
