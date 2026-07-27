import express from "express";
import config from "./configuration/config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";



const app = express();
app.use(express.json());
app.use('/', bookRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        console.log('Connected to MongoDB');
    } catch (e) {
        console.log('Failed connection to MongoDB: ', e);
    }
}

async function startServer() {
    await connectDB();
    app.listen(config.port, () => console.log(`Server running on port ${config.port}. Press Ctrl+C to stop.`));
}


startServer();

