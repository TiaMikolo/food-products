import Profile from './components/profile/Profile.jsx'
import personList from './constants/personList.js'

// function App() {
//   return (
//     <React.Fragment>
//       <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </React.Fragment>
//   )
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink',
//   },
// }
// function App() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}</h1>
//       <img src={avatar} alt={description} className="avatar" />
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Les personnes :</h1>
//       <Profile person={Zara} size={100} />
//       <Profile person={Jean} size={80} />
//       <Profile person={John} size={50} />
//     </>
//   )
// }

// function App() {
//   return (
//     <Card>
//       <Profile person={Zara} size={100} />
//     </Card>
//   )
// }

// Application
function App() {
  return (
    <div>
      {/* <Profile
        image={avatar}
        name="Hedy Lamarr"
        profession="Actress"
        awards={['Best Actress', 'Most Beautiful Woman']}
        discovery="polonium (chemical element)"
      />
      <Profile
        image={avatar}
        name="Gregorio Y. Zara"
        profession="Inventor"
        awards={['National Scientist', 'Outstanding Researcher']}
        discovery="Zinc (chemical element)"
      />
      <Profile
        image={avatar}
        name="Jean-Pierre Dufau"
        profession="Physicist"
        awards={['Nobel Prize in Physics']}
        discovery="Nuclear fusion"
      /> */}
      {personList.map(person => (
        <Profile key={person.name} {...person} />
      ))}
    </div>
  )
}

export default App
