import express from 'express';
import { createServer, Server } from 'http';

const app = express();
const httpServer = createServer(app);

// const io = new Server(httpServer, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//     }
// });

const port = process.env.PORT || 3000 ;

// httpServer.listen(port, () => {
//     console.log(`server is running on ${port}`);
// })

httpServer.listen(port, () => {
    console.log("server listening to port " + port);
})