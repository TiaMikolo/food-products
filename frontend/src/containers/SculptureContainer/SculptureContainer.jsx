import { useState } from 'react'
import sculptureList from '../../const/sculptureList'
import CustomButton from '../../components/CustomButton/CustomButton'

const SculptureContainer = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const hasNext = index < sculptureList.length - 1
  const hasPrevious = index > 0

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const handlePreviousClick = () => {
    if (hasPrevious) {
      setIndex(index - 1)
    } else {
      setIndex(sculptureList.length - 1)
    }
  }

  const handleMoreClick = () => {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]

  return (
    <div>
      <CustomButton content="Next" onClick={handleNextClick} />
      <CustomButton content="Previous" onClick={handlePreviousClick} />
      <h2>{sculpture.name}</h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <CustomButton content={`${showMore ? 'Hide' : 'Show'} details`} onClick={handleMoreClick} />
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  )
}

export default SculptureContainer

// import React, { Component } from 'react'
// import sculptureList from '../../const/sculptureList'
// import CustomButton from '../../components/CustomButtons/CustomButton'

// class SculptureContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       index: 0,
//       showMore: false,
//     }
//   }

//   handleNextClick = () => {
//     this.setState(prevState => {
//       const hasNext = prevState.index < sculptureList.length - 1
//       return {
//         index: hasNext ? prevState.index + 1 : 0,
//       }
//     })
//   }

//   handlePreviousClick = () => {
//     this.setState(prevState => {
//       const hasPrevious = prevState.index > 0
//       return {
//         index: hasPrevious ? prevState.index - 1 : sculptureList.length - 1,
//       }
//     })
//   }

//   handleMoreClick = () => {
//     this.setState(prevState => ({
//       showMore: !prevState.showMore,
//     }))
//   }

//   render() {
//     const { index, showMore } = this.state
//     const sculpture = sculptureList[index]

//     return (
//       <div>
//         <CustomButton content="Next" onClick={this.handleNextClick} />
//         <CustomButton content="Previous" onClick={this.handlePreviousClick} />

//         <h2>{sculpture.name}</h2>
//         <h3>
//           ({index + 1} of {sculptureList.length})
//         </h3>

//         <CustomButton
//           content={`${showMore ? 'Hide' : 'Show'} details`}
//           onClick={this.handleMoreClick}
//         />

//         {showMore && <p>{sculpture.description}</p>}
//         <img src={sculpture.url} alt={sculpture.alt} />
//       </div>
//     )
//   }
// }

// export default SculptureContainer
