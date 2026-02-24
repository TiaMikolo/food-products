// const Profile = ({ image, name, isCertified, profession, awards, discovery, imagesize = 70 }) => {
//   let itemContent = name
//   if (isCertified) {
//     itemContent = name + '✅'
//   }

import Cup from '../cup/Cup'

//   return (
//     <section>
//       <h2>{itemContent}</h2>
//       <img src={image} alt={name} className="avatar" width={imagesize} />
//       <ul>
//         <li>
//           <b>Profession: </b> {profession}
//         </li>
//         <li>
//           <b>Awards: {awards.length}</b> ({awards.join(', ')})
//         </li>
//         <li>
//           <b>discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   )
// }

const Profile = ({ image, name, isCertified, profession, awards, discovery, imagesize = 70 }) => (
  <section>
    {/* <h2>{isCertified ? name + '✅' : name + '❌'} </h2> */}
    {/* <h2>
        {name} {isCertified && '✅'}
      </h2> */}
    <h2>
      {name} {isCertified && <Cup guest={1} />}
    </h2>
    <img src={image} alt={name} className="avatar" width={imagesize} />
    <ul>
      <li>
        <b>Profession: </b> {profession}
      </li>
      <li>
        <b>Awards: {awards.length}</b> ({awards.join(', ')})
      </li>
      <li>
        <b>discovered: </b>
        {discovery}
      </li>
    </ul>
  </section>
)

export default Profile
