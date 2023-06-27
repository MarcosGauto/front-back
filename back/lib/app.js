"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const alojamientos_router_1 = require("./router/alojamientos.router");
const mongodb_1 = require("mongodb");
const reservas_router_1 = require("./router/reservas.router");
const formulario_router_1 = require("./router/formulario.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/alojamientos", alojamientos_router_1.alojamientosRouter);
//ruta de reservas
app.use("/reservas", reservas_router_1.reservasRouter);
app.use("/formulario", formulario_router_1.formularioRouter);
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new mongodb_1.MongoClient(url);
let db;
exports.db = db;
// Database Name
const dbName = 'El_Remanso';
client.connect().then(() => {
    console.log('Connected successfully to server');
    exports.db = db = client.db(dbName);
});
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("server escuchando en el puerto 3001");
}));
