// let guest = 0

// const Cup = () => {
//   guest = guest + 1

//   return <h2>Tea cup for guest : {guest}</h2>
// }

const Cup = ({ guest }) => <h2>Tea cup for guest : {guest}</h2>

export default Cup
