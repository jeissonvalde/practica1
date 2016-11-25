import http from 'http'
import express from 'express'
import expressSession from 'express-session'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import socketio from 'socket.io'
import redis from 'socket.io-redis'
import passport from 'passport'
const LocalStrategy = require('passport').Strategy

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressSession({
  secret: 'mi fraz3Z3kr3ta',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, '../public')))

/* passport.use('/login', LocalStrategy((username, password, done) => {
  // Logica de base de datos
})) */

app.use('/login', (req, res) => {
  res.redirect('login.html')
})

server.listen(port, () => console.log(`Listening on port ${port}`))
