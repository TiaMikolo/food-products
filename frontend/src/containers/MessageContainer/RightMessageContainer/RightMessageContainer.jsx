import CustomTypography from '../../../components/CustomTypography/CustomTypography'
import { useStyles } from './RightMessageContainer.css'
import AddButton from '../../../components/AddButton/AddButton'
import RoomCard from '../../../components/RoomCard/RoomCard'
import classNames from 'classnames'
import CustomAvatar from '../../../components/CustomAvatar/CustomAvatar'
import AddMemberAvatar from '../../../components/AddMemberAvatar/AddMemberAvatar'
import Generic from '../../../components/Generic/Generic'
import { useNavigate } from 'react-router'

const roomList = [
  {
    id: '1',
    icon: '💬',
    name: 'Design Team',
    member: '5 membres',
    message: 'Mikolo: Super idée 🔥',
    number: '2',
  },
  {
    id: '2',
    icon: '🚀',
    name: 'Projet Alpha',
    member: '8 membres · actif',
    message: 'Lila: On valide demain',
  },
  {
    id: '3',
    icon: '📋',
    name: 'Sprint Review',
    member: '4 membres',
    message: 'Taro: Notes envoyées',
  },
]

const recentMemberList = [
  {
    id: '1',
    name: 'Mikolo A.',
    color: 'normal',
  },
  {
    id: '2',
    name: 'Lila R.',
    color: 'greenOrange',
  },
  {
    id: '3',
    name: 'Taro F.',
    color: 'orangeGray',
  },
  {
    id: '4',
    name: 'Dina P.',
    color: 'green',
  },
]

const genericList = [
  {
    id: '1',
    text: 'Notifications',
    icon: '🔔',
    danger: false,
  },
  {
    id: '2',
    text: 'Confidentialité',
    icon: '🔒',
    danger: false,
  },
  {
    id: '3',
    text: 'Quitter la room',
    icon: '🗑',
    danger: true,
  },
]

const RightMessageContainer = () => {
  const classes = useStyles()

  const navigate = useNavigate()

  //click button 'Ajouter'
  const onClickButtonAdd = () => {
    navigate('/products')
  }

  //click room
  const onClickRoomCard = room => {
    console.log('room ==> ', room)
  }

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <CustomTypography type="name" text="Mes Rooms" />
          <CustomTypography
            type="indicator"
            text="3 rooms actives"
            classNameIndicator={classes.numberOfRoom}
          />
        </div>
        <AddButton content="＋ Ajouter" onClick={onClickButtonAdd} />
      </div>
      <div className={classes.RoomCardContainer}>
        {roomList.map(room => (
          <RoomCard
            key={room.id}
            icon={room.icon}
            roomName={room.name}
            member={room.member}
            message={room.message}
            number={room.number}
            haveBadge={room.number !== undefined}
            onClick={() => onClickRoomCard(room)}
          />
        ))}
        <div className={classes.line}></div>
      </div>
      <div className={classes.recentMemberContainer}>
        <CustomTypography type="title" text="Membres récents" />
        <div className={classes.memberListContainer}>
          <div className={classes.memberList}>
            {recentMemberList.map(member => (
              <CustomAvatar
                key={member.id}
                user={member.name}
                classNameRoot={classNames(classes.avatar, {
                  [classes.avatarOrange]: member.color === 'orange',
                  [classes.avatarOrangeGray]: member.color === 'orangeGray',
                  [classes.avatarGreen]: member.color === 'green',
                  [classes.avatarGreen]: member.color === 'greenOrange',
                })}
                classNameDot={classNames(classes.greenDot, {
                  [classes.dotOrange]: member.color === 'orange',
                  [classes.dotGray]: member.color === 'orangeGray',
                  [classes.dotOrange]: member.color === 'greenOrange',
                })}
              />
            ))}
          </div>
          <AddMemberAvatar addIcon="+" />
        </div>
      </div>
      <div className={classes.lastLine}></div>
      <div className={classes.generic}>
        {genericList.map(generic => (
          <Generic
            key={generic.id}
            icon={generic.icon}
            text={generic.text}
            danger={generic.danger}
          />
        ))}
      </div>
    </div>
  )
}

export default RightMessageContainer
