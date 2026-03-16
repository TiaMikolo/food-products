const senderId = '699711274a72c5fd3e6f5dac'
const recipientId = '69970bbd4a72c5fd3e6f5daa'
const idMe = senderId

const data = [
  {
    id: '1',
    sender: senderId,
    recipient: recipientId,
    content: 'bonjour Dinio',
  },
  {
    id: '2',
    sender: recipientId,
    recipient: senderId,
    content: `Oui je viens de le regarder, c'est vraiment bien fait 🔥`,
  },
  {
    id: '3',
    sender: senderId,
    recipient: recipientId,
    content: 'Vaovao ?',
  },
]

export { idMe, data, senderId, recipientId }
