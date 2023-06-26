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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservasController = void 0;
const app_1 = require("../app");
exports.reservasController = {
    getReservas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Desde el front vas a tener que poner en el body de la request, la informacion de la reserva
            // aca accedes desde req.body.[nombre que le pongas]
            console.log('Req.body:', req.body);
            let resultado = (yield app_1.db.collection('Reservas')).insertOne({
                fechaDeInicio: req.body.inicio,
                fechaFinal: req.body.final
            });
            return res.status(200).json({
                "reservas": resultado
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    })
};
