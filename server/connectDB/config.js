import mongoose from "mongoose"
function connectDB(){
  mongoose.connect(process.env.DB).then(() => {
   console.log("Database connected successfully")
  })
  .catch(() => {
    console.log("Failed to connect data")
  })
}
export default connectDB