import ChatMessageContainer from '../../containers/MessageContainer/ChatMessageContainer/ChatMessageContainer'
import LeftMessageContainer from '../../containers/MessageContainer/LeftMessageContainer/LeftMessageContainer'
import RightMessageContainer from '../../containers/MessageContainer/RightMessageContainer/RightMessageContainer'
import { useStyles } from './MessagePage.css'

const MessagePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LeftMessageContainer />
      <ChatMessageContainer />
      <RightMessageContainer />
    </div>
  )
}

export default MessagePage
