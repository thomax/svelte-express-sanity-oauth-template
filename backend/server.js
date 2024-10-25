// https://expressjs.com/en/starter/examples.html
import express from 'express'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { config as configureDotenv } from 'dotenv'
configureDotenv()
import { oauthToSanity } from './src/utils.js'
import { createUser, getUser } from './src/sanity.js'

const app = express()
const port = 3000
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}
// Middleware
app.use(express.static('public'))
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors(corsOptions)) // https://expressjs.com/en/resources/middleware/cors.html


passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

// Google OAuth Strategy setup
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (token, tokenSecret, profile, done) => {
  return done(null, profile)
}))

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  async (req, res) => {
    console.log('Auth callback from google')
    const user = oauthToSanity(req.user)
    let sanityUser = await getUser({ email: user.email })
    if (sanityUser) {
      console.log('User exists', sanityUser)
    } else {
      console.log('User didnt exist, creating')
      sanityUser = await createUser(user)
    }
    res.redirect('http://localhost:5173/')
  }
)

// Get current user
app.get('/auth/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
})

// Test endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
