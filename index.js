const express = require('express')
const app = express()
const port = 3000

app.get('/newpiece', (req, res) => {
  res.send('Hello World!')
})
// dinh nghia tuyen duong trang web

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})