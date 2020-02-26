
require('dotenv').config();
const{ MONGO_URI, PORT } = process.env

// connect to MongoDB with mongoose
const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(MONGODB_URI, options, () => {
  console.log('Connected to MongoDB');
})

// start the express server
const app = require('./src/app')
app.start(PORT)
