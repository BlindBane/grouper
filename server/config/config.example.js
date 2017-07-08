const YELP_APP_ID = ''
const YELP_APP_SECRET = ''
const AUTH_SECRET = ''

const configEnv = require('./development')

let config = function () {
  process.env.YELP_APP_ID = YELP_APP_ID
  process.env.YELP_APP_SECRET = YELP_APP_SECRET
  process.env.MONGO_URL = configEnv.mongoUrl
  process.env.AUTH_SECRET = AUTH_SECRET
}

module.exports = config
