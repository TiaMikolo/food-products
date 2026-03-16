import { useState } from 'react'
import AvatarSegmented from '../../../components/AvatarSegmented/AvatarSegmented'
import IconButton from '../../../components/IconButton/IconButton'
import MessageBar from '../../../components/MessageBar/MessageBar'
import UserRole from '../../../components/UserRole/UserRole'
import { useStyles } from './ChatMessageContainer.css'
import { data, idMe, recipientId, senderId } from './data'
import Bubble from '../../../components/Bubble/Bubble'

const ChatMessageContainer = () => {
  const classes = useStyles()

  const [messages, setMessages] = useState(data)
  const [sender, setSender] = useState({ sender: senderId, recipient: recipientId, content: '' })
  const [recipient, setRecipient] = useState({
    sender: recipientId,
    recipient: senderId,
    content: '',
  })

  const messageOnChange = (who, e) => {
    const { value } = e.target

    if (who === 'sender') {
      setSender({
        ...sender,
        content: value,
      })
    } else if (who === 'recipient') {
      setRecipient({
        ...recipient,
        content: value,
      })
    }
  }

  const sendMessage = who => {
    if (who === 'sender') {
      setMessages([...messages, sender])
      setSender({ sender: senderId, recipient: recipientId, content: '' })
    } else if (who === 'recipient') {
      setMessages([...messages, recipient])
      setRecipient({
        sender: recipientId,
        recipient: senderId,
        content: '',
      })
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.chatHead}>
        <AvatarSegmented
          user="Mikolo A."
          name="Mikolo A."
          indicator="● En ligne"
          classAvatar={classes.avatar}
          classIndicator={classes.indicator}
        />
        <div className={classes.iconContainer}>
          <IconButton icon="📞" />
          <IconButton icon="🎥" />
          <IconButton icon="···" />
        </div>
      </div>
      <div className={classes.bodyMessage}>
        {messages.map(mes => {
          if (idMe === mes.sender) {
            return (
              <Bubble
                type="bubbleMe"
                message={mes.content}
                name="Ayton"
                time="10:14"
                key={mes.id}
              />
            )
          } else {
            return (
              <Bubble
                type="bubbleThem"
                message={mes.content}
                name="Mikolo"
                time="10:14"
                key={mes.id}
              />
            )
          }
        })}
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.inputRoleContainer}>
          <UserRole
            role="sender"
            placeholder="Ayoton"
            button="▷"
            value={sender.content}
            onClick={() => sendMessage('sender')}
            onChange={e => messageOnChange('sender', e)}
          />
          <UserRole
            role="recipient"
            placeholder="Mikolo A."
            button="▷"
            value={recipient.content}
            onClick={() => sendMessage('recipient')}
            onChange={e => messageOnChange('recipient', e)}
          />
        </div>
        <MessageBar
          placeholder="Écrire un message..."
          firstIcon="😊"
          secondIcon="📎"
          thirdIcon="➤"
        />
      </div>
    </div>
  )
}

export default ChatMessageContainer
