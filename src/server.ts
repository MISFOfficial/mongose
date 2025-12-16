const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000



// data base connections
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('database connetion successfull')
  } catch (err) {
    console.log(err)
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
