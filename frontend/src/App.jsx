import Profile from './components/profile/Profile.jsx'
// import personList from './const/personList.js'
import Inventor from './components/inventor/Inventor.jsx'
import Cup from './components/cup/Cup.jsx'
// import inventorList from './const/inventor.js'
import { Button } from 'antd'
import { Input } from 'antd'
import { DatePicker } from 'antd'

const App = () => (
  <div>
    {/* {personList.map(person => (
      <Profile key={person.id} {...person} />
    ))} */}
    {/* <ul>
      {inventorList.map(inventor => (
        <Inventor key={inventor.id} {...inventor} />
      ))}
    </ul> */}
    {/* <Cup guest={1} />
    <Cup guest={2} />
    <Cup guest={3} /> */}
    {/* <Cup guest={1} />
    <Cup guest={2} />
    <Cup guest={3} /> */}
    <Button type="dashed">Dashed Button</Button>
    <button>button</button>
    <Input type="password" placeholder="Basic usage" />
    <input type="text" placeholder="Basic usage" />
    <DatePicker />
  </div>
)

export default App
