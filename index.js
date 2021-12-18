const getURLTypeError = () => {
  try {
    new URL('garbage')
  } catch (error) {
    return error instanceof TypeError
  }
}

exports.getURLTypeError = getURLTypeError

if (require.main === module) {
  console.log(getURLTypeError())
}
