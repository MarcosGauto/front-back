import { reservasController } from "../controllers/reservas.controllers";
import { Router } from "express";

const router = Router();

router.post("/", reservasController.getReservas);

export {router as reservasRouter}