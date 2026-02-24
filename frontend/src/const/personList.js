import zaraLinkImage from './linkImage/zaraLinkImage'
import lamarLinkImage from './linkImage/lamarLinkImage'
import bertineLinkImage from './linkImage/bertineLinkImage'

const personList = [
  {
    id: 1,
    name: 'Gregorio Y. Zara',
    isCertified: true,
    image: zaraLinkImage,
    profession: 'Inventor',
    awards: ['National Scientist', 'Outstanding Researcher'],
    discovery: 'Zinc (chemical element)',
  },
  {
    id: 2,
    name: 'Bertine',
    isCertified: true,
    image: bertineLinkImage,
    profession: 'Physicist',
    awards: ['Nobel Prize in Physics'],
    discovery: 'Nuclear fusion',
  },
  {
    id: 3,
    name: 'Hedy Lamarr',
    isCertified: false,
    image: lamarLinkImage,
    profession: 'Actress',
    awards: ['Best Actress', 'Most Beautiful Woman'],
    discovery: 'Polonium (chemical element)',
  },
]

export default personList
