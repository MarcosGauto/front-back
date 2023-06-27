import { formularioController } from "../controllers/formulario.controllers";
import  Router from "express";

const formularioRouter = Router();

formularioRouter.post("/enviar", formularioController.enviar); // se cambia a all para ver todos

export { formularioRouter } // renombramos router porque tambien se puede llamar asi en reservas.