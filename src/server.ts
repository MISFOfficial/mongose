
import mongoose from 'mongoose';
import app from './app'

const port: number = 5000


// data base connections
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('database connetion successfull')

    app.listen(port, () => {
      console.log(`Server is runnnig at port ${port}`)
    })
  } catch (err) {
    console.error('MongoDB connection failed:', err instanceof Error ? err.message : err)
    console.warn('Server starting without database connection...')
    
    // Start server even if DB is not connected
    app.listen(port, () => {
      console.log(`Server is runnnig at port ${port}`)
    })
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()