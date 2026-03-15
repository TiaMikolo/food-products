import { useState } from 'react'
import { useStyles } from './Tabs.css'

const Tabs = ({ items }) => {
  const classes = useStyles()
  const [indexItem, setIndexItem] = useState(0)

  const handleClick = index => {
    setIndexItem(index)
  }

  return (
    <div className={classes.containerTabs}>
      <div className={classes.containerItem}>
        {items.map((item, index) => (
          <div key={item.id} onClick={() => handleClick(index)} className={classes.label}>
            <div className={classes.container}>
              <div className={indexItem === index ? classes.cliqued : classes.noCliqued}>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      {items[indexItem].children}
    </div>
  )
}

export default Tabs
