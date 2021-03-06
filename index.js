#!/usr/bin/env node
const Turn = require('node-turn')

const PORT = process.env.PORT || 3478
const USER = process.env.USER || 'test'
const PASS = process.env.PASS || 'test'

const server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    [USER]: PASS
  }
})

server.start()
console.log(new Date().toString())
console.log('Holis TURN server started!')
console.log(`
  USER: ${USER}
  PASS: ${PASS}
  PORT: ${PORT}
`)
console.log('-'.repeat(80))
