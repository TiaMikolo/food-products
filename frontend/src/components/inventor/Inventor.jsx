const Inventor = ({ image, name, discovery }) => (
  <ul>
    <li>
      <img src={image} alt={name} />
      <p>
        <b>{name} : </b>
        {discovery}
      </p>
    </li>
  </ul>
)

export default Inventor
