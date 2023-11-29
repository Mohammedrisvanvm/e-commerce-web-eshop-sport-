import mongoose from "mongoose";

function dbConnect() {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGOOSE_CONNECTLOCAL).then(console.log("eshop db connected  !!!")).catch((err)=>console.log(err))

    
}
export default dbConnect 