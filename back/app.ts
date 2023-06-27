import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { alojamientosRouter } from "./router/alojamientos.router";
import { MongoClient } from "mongodb";
import { reservasRouter } from "./router/reservas.router";
import { formularioRouter } from "./router/formulario.router";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/alojamientos", alojamientosRouter)

//ruta de reservas
app.use("/reservas", reservasRouter)

app.use("/formulario", formularioRouter)

// Connection URL
const url = process.env.MONGO_URL || "";
const client = new MongoClient(url);
let db: any;

// Database Name
const dbName = 'El_Remanso';

client.connect().then(() => {
    console.log('Connected successfully to server');
    db = client.db(dbName);
});

app.use(express.urlencoded({extended: false}));

let port = process.env.PORT || 3002

app.listen(port, async () => {
    console.log("server escuchando en el puerto 3001");  
});

export {db};