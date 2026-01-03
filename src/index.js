import connectDB  from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on the port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connecton failed !!!" , err);
    
})



/*
import express from "express";
const app = express();

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("ERROR", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening to the port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR (DB connect function): ", error)
        throw error
    }
})
*/
