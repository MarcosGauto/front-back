import { reservasController } from "../controllers/reservas.controllers";
import  Router  from "express";

const router = Router();

router.get("/", reservasController.getReservas);

export {router as reservasRouter}