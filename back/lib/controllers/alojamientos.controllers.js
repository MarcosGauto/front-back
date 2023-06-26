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
exports.alojamientosController = void 0;
const app_1 = require("../app");
exports.alojamientosController = {
    getAlojamientos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let resultado = yield app_1.db.collection('Cabañas').find({}).toArray();
            return res.status(200).json({
                "alojamientos": resultado
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    })
};
