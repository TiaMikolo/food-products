// import description from '../../constants/descriptionAvatar'
// import avatar from '../../constants/linkImage/avatar'

// function Profile({ person, size }) {
//   return (
//     <>
//       <h1>{person.name}</h1>
//       <img src={avatar} alt={description} className="avatar" width={size} />
//     </>
//   )
// }

// function Profile({ person, size = 100 }) {
//   return (
//     <>
//       <h1>{person.name}</h1>
//       <img src={avatar} alt={description} className="avatar" width={size} />
//     </>
//   )
// }

// Application
function Profile({ image, name, profession, awards, discovery, imagesize = 70 }) {
  return (
    <section>
      <h2>{name}</h2>
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
}

export default Profile
