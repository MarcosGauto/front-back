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
exports.cabañasController = void 0;
const app_1 = require("../app");
exports.cabañasController = {
    getDias: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let resultado = yield app_1.db.collection('Cabañas').find({}).toArray();
            res.status(200).json({
                "alojamientos": resultado
            });
        }
        catch (error) {
        }
    })
};
/*
npm init -y: Arranca un nuevo proyecto node
npm i -g typescript: Instala typescript global
npm i express: Instala express en el proceso

Crear carpetas: controllers, lib, models, router
Crear archivo: app.ts
*/ 
