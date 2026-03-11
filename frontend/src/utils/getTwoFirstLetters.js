const getTwoFirstLetters = name => {
  const nameTemp = name.toUpperCase().split(' ')

  return nameTemp[0].slice(0, 2)
}

export default getTwoFirstLetters
