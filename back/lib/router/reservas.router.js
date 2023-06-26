"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservasRouter = void 0;
const reservas_controllers_1 = require("../controllers/reservas.controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.reservasRouter = router;
router.post("/", reservas_controllers_1.reservasController.getReservas);
