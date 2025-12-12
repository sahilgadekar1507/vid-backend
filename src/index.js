import connectDB  from "./db/index.js";

connectDB();



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
