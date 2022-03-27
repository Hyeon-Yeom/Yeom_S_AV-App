import express from 'express';
import { createServer, Server } from 'http';

const app = express();
const httpServer = creatServer(app);

// const io = new Server(httpServer, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//     }
// });

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log(`server is running on ${port}`);
})