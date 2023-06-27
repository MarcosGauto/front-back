import {alojamientosController} from "../controllers/alojamientos.controllers";
import  Router from "express";

const router = Router();

router.get("/", alojamientosController.getAlojamientos);

export {router as alojamientosRouter} 