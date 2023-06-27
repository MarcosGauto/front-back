"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formularioController = void 0;
const nodemailer = require('nodemailer');
exports.formularioController = {
    enviar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { nombre, apellido, telefono, personas, email, mensaje } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'jaquelin.stehr@ethereal.email',
                pass: '	KHgdvMyDNbXy1qcrQV'
            }
        });
        const mailOptions = {
            from: email,
            to: 'mgauto@outlook.es',
            subject: 'Formulario de contacto',
            text: `
            Nombre: ${nombre}\n
            Apellido: ${apellido}\n
            Telefono: ${telefono}\n
            Personas: ${personas}\n
            Email:${email}\n 
            Mensaje:${mensaje}`
        };
        try {
            yield transporter.sendMail(mailOptions);
            res.status(200).json({
                confirmacion: true,
                nombre: req.body.nombre
            });
        }
        catch (error) {
            res.status(500).json({
                confirmacion: false,
                message: error.message
            });
        }
    })
};
