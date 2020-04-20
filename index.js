const Turn = require('node-turn')

const PORT = process.env.PORT || 3478
const USER = process.env.USER || 'test'
const PASS = process.env.PASS || 'test'

const server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    [USER]: PASS
  },
  listeningPort: PORT,
  listeningIps: ['127.0.0.0']
})

server.start()
console.log(new Date().toString())
console.log('Holis TURN server started!')
console.log(`
  USER: ${user}
  PASS: ${pass}
`)
console.log('-'.repeat(80))
