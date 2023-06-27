import { formularioController } from "../controllers/formulario.controllers";
import  Router from "express";

const router = Router();

router.get("/", formularioController); // se cambia a all para ver todos

export {router as formularioRouter} // renombramos router porque tambien se puede llamar asi en reservas.