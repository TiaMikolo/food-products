import cardStyle from './card.css'

function Card({ children }) {
  return (
    <div className="card" style={cardStyle}>
      {children} {children}
    </div>
  )
}

export default Card
