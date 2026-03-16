import AvatarSegmented from '../../../components/AvatarSegmented/AvatarSegmented'
import EditButton from '../../../components/EditButton/EditButton'
import { useStyles } from './LeftMessageContainer.css'
import SearchInput from '../../../components/SearchInput/SearchInput'
import Tabs from '../../../components/Tabs/Tabs'
import CustomTypography from '../../../components/CustomTypography/CustomTypography'
import RecentMessage from '../../../components/RecentMessage/RecentMessage'
import OnlineFriend from '../../../components/OnlineFriend/OnlineFriend'

const users = [
  {
    id: '1',
    name: 'Mikolo A.',
    text: 'Ok merci pour le ret...',
    time: '10:42',
    number: '2',
    color: 'normal',
  },
  {
    id: '2',
    name: 'Lila R.',
    text: 'Tu peux envoyer le doc ?',
    time: '09:15',
    color: 'orange',
  },
  {
    id: '3',
    name: 'Taro F.',
    text: 'Réunion à 14h.',
    time: 'Hier',
    color: 'orangeGray',
  },
  {
    id: '4',
    name: 'Dina P.',
    text: `C'est noté 👌`,
    time: 'Hier',
    color: 'green',
  },
]

const onlineFriend = [
  {
    id: '1',
    name: 'Rojo M.',
    indicator: 'En ligne',
    color: 'normal',
  },
  {
    id: '2',
    name: 'Nadia K.',
    indicator: 'En ligne',
    color: 'orange',
  },
  {
    id: '3',
    name: 'Soa R.',
    indicator: 'Absent',
    color: 'orangeGray',
  },
]

const LeftMessageContainer = () => {
  const classes = useStyles()

  const tabList = [
    {
      id: '1',
      label: 'Messages',
      children: (
        <div className={classes.RecentMessageContainer}>
          <CustomTypography type="title" text="Récents" />
          {users.map(user => (
            <RecentMessage
              key={user.id}
              name={user.name}
              text={user.text}
              time={user.time}
              number={user.number}
              onClick={() => onClickUser(user)}
              orange={user.color === 'orange'}
              orangeGray={user.color === 'orangeGray'}
              green={user.color === 'green'}
              haveBadge={user.number == undefined}
            />
          ))}
          <div className={classes.line}></div>
        </div>
      ),
    },
    {
      id: '2',
      label: 'Amis',
    },
  ]

  //click user in 'recents'
  const onClickUser = user => {
    console.log('user ==>', user)
  }

  //click user in 'amis en ligne'
  const onClickOnlineFriend = friend => {
    console.log('friend ===>', friend)
  }

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.avatarEditButtonContainer}>
          <AvatarSegmented user="Ayoton" name="Ayoton" indicator="● En ligne" />
          <EditButton content="✏️" />
        </div>
        <SearchInput placeholder="Rechercher..." />
      </div>
      <Tabs items={tabList} />
      <div className={classes.onlineFriend}>
        <CustomTypography type="title" text="Amis en ligne" />
        {onlineFriend.map(friend => (
          <OnlineFriend
            key={friend.id}
            name={friend.name}
            indicator={friend.indicator}
            firstIcon="✉"
            lastIcon="✕"
            orange={friend.color === 'orange'}
            orangeGray={friend.color === 'orangeGray'}
            green={friend.color === 'green'}
            onClick={() => onClickOnlineFriend(friend)}
          />
        ))}
      </div>
    </div>
  )
}

export default LeftMessageContainer
