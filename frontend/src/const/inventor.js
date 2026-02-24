import personList from './personList'

const inventorList = personList.filter(person => person.profession === 'Inventor')

export default inventorList
