import { formularioController } from "../controllers/formulario.controllers";
import  Router from "express";

const formularioRouter = Router();

formularioRouter.post("/enviar", formularioController.enviar); 

export { formularioRouter } 