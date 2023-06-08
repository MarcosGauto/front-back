import express from "express";
import cors from "cors";
import { alojamientosRouter } from "./router/alojamientos.router";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());

app.use("/alojamientos", alojamientosRouter)

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
let db: any;

// Database Name
const dbName = 'El_Remanso';

client.connect().then(() => {
    console.log('Connected successfully to server');
    db = client.db(dbName);
});

app.listen(3001, async () => {
    console.log("server escuchando en el puerto 3001");  
});

export {db};