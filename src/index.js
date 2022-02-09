const express= require('express')
// require('./db/mongoose')

const res = require('express/lib/response')

const app =express()
const port = process.env.PORT || 3000

const taskRouter = require('./routers/task')

app.use(express.json())
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+port)
})