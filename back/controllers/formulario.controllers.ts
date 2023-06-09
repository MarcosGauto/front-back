const nodemailer = require('nodemailer');
import { Request, Response } from "express";


export const formularioController = {

    enviar: async(req: Request, res: Response) => {
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
            await transporter.sendMail(mailOptions);
            
            res.status(200).json({
                confirmacion: true,
                nombre: req.body.nombre
            });
        } catch (error: any) {
            res.status(500).json({
                confirmacion: false,
                message: error.message
            });
        }
    
    
    }


}