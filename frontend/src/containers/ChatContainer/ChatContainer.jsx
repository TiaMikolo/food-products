import { useState } from 'react'
import CustomAvatar from '../../components/CustomAvatar/CustomAvatar'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomTypography from '../../components/CustomTypography/CustomTypography'
import { useStyles } from './ChatContainer.css'
import { data, idMe, recipientId, senderId } from './data'

const ChatContainer = () => {
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
      console.log('message ==>', messages)
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
    <div className={classes.messageContainer}>
      <div>
        {messages.map(mes => {
          if (idMe === mes.sender) {
            return (
              <div key={mes.id}>
                <CustomTypography id={mes.id} text={mes.content} type="text" />
                <CustomAvatar user={recipient.id} />
              </div>
            )
          } else {
            return (
              <div key={mes.id}>
                <CustomAvatar user={recipient.id} />
                <CustomTypography id={mes.id} text={mes.content} type="text" />
              </div>
            )
          }
        })}
      </div>
      <div className={classes.messageInputContainer}>
        <div className={classes.messageInput}>
          <CustomInput
            type="textArea"
            label={<CustomAvatar user="S" />}
            onChange={e => messageOnChange('sender', e)}
            value={sender.content}
            placeholder="Message sender"
          />
          <CustomButton content="Envoyer" onClick={() => sendMessage('sender')} />
        </div>
        <div className={classes.messageInput}>
          <CustomInput
            type="textArea"
            label={<CustomAvatar user="R" />}
            onChange={e => messageOnChange('recipient', e)}
            value={recipient.content}
            placeholder="Message recipient"
          />
          <CustomButton content="Envoyer" onClick={() => sendMessage('recipient')} />
        </div>
      </div>
    </div>
  )
}

export default ChatContainer
