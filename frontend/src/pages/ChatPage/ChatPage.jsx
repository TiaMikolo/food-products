import AddFriendsContainer from '../../containers/AddFriendsContainer/AddFriendsContainer'
import AddRoomsContainer from '../../containers/AddRoomsContainer/AddRoomsContainer'
import ChatContainer from '../../containers/ChatContainer/ChatContainer'
import { useStyles } from './ChatPage.css'

const ChatPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <AddFriendsContainer />
      <ChatContainer />
      <AddRoomsContainer />
    </div>
  )
}

export default ChatPage
