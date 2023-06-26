import express from "express";
import cors from "cors";
import { alojamientosRouter } from "./router/alojamientos.router";
import { MongoClient } from "mongodb";
import { reservasRouter } from "./router/reservas.router";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/alojamientos", alojamientosRouter)

//armar la ruta de reservas
app.use("/reservas", reservasRouter)

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