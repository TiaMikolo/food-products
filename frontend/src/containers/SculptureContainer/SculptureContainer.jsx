import { useState } from 'react'
import sculptureList from '../../const/sculptureList'
import CustomButton from '../../components/CustomButtons/CustomButton'

const SculptureContainer = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const hasNext = index < sculptureList.length - 1

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const handleMoreClick = () => {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]

  return (
    <div>
      <CustomButton label="Next" onClick={handleNextClick} />
      <h2>{sculpture.name}</h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <CustomButton label={`${showMore ? 'Hide' : 'Show'} details`} onClick={handleMoreClick} />
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  )
}

export default SculptureContainer
