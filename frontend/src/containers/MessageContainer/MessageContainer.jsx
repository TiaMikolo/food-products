import { useState } from 'react'

const submitForm = answer => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sholdError = answer.toLowerCase() !== 'lima'
      if (sholdError) {
        reject(new Error('Bonne idée, mais mauvaise réponse. Réessayez !'))
      } else {
        resolve()
      }
    }, 1500)
  })
}

const MessageContainer = () => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing')

  if (status === 'success') {
    return <h1>c'est exact !</h1>
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }

  const handleTextAreaChange = e => {
    setAnswer(e.target.value)
  }

  return (
    <div>
      <h2>Quiz sur les villes</h2>
      <p>
        Dans quelle ville trouve-t-on un panneau d’affichage qui transforme l’air en eau potable ?
      </p>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Envoyer</button>
        {error !== null && <p>{error.message}</p>}
      </form>
    </div>
  )
}

export default MessageContainer
