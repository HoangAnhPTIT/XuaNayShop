const express = require('express')
const cors = require('cors')
const app = express()
const connectDb = require('./middleware/connectDatabase')
const routes = require('./routes/index')
const resolveJwtToken = require('./middleware/jwt');
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(resolveJwtToken)

const port = 3000

connectDb()

app.post('/ping', async (req, res) => {
  res.json({ message: "Pinggg" })
})

routes.forEach(route => {
  app.use('/api/v1', route)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
