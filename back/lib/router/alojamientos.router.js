"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alojamientosRouter = void 0;
const alojamientos_controllers_1 = require("../controllers/alojamientos.controllers");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
exports.alojamientosRouter = router;
router.get("/", alojamientos_controllers_1.alojamientosController.getAlojamientos); // se cambia a all para ver todos
