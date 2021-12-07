export const getURLTypeError = (): Boolean | undefined => {
  try {
    new URL('garbage')
  } catch (error) {
    return error instanceof TypeError
  }
}

if (require.main === module) {
  console.log(getURLTypeError())
}