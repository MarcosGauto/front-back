"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formularioRouter = void 0;
const formulario_controllers_1 = require("../controllers/formulario.controllers");
const express_1 = __importDefault(require("express"));
const formularioRouter = (0, express_1.default)();
exports.formularioRouter = formularioRouter;
formularioRouter.post("/enviar", formulario_controllers_1.formularioController.enviar); // se cambia a all para ver todos
