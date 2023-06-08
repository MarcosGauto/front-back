import {alojamientosController} from "../controllers/alojamientos.controllers";
import  Router from "express";

const router = Router();

router.get("/", alojamientosController.getAlojamientos); // se cambia a all para ver todos

export {router as alojamientosRouter} // renombramos router porque tambien se puede llamar asi en reservas.