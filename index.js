const { secret } = require('./secret')

const sayHello = name => {
  console.log('Hello, ' + name + '!')
  secret()
}

module.exports = {
  sayHello,
}
