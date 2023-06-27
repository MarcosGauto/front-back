const express = require('express');
const nodemailer = require('nodemailer');
import { Request, Response } from "express";

const router = express.Router();

router.get('/',(req: Request, res: Response) => {
    res.render("formulario")
});

router.post('/enviar', async(req: Request, res: Response) =>{
    const { nombre, email, mensaje } = req.body;



const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zechariah.oreilly@ethereal.email',
        pass: '13WJeufShrs82x6vtc'
    }
});

const mailOptions = {
    from: email,
    to: 'marcosgauto@ejemplo.com',
    subject: 'Formulario de contacto',
    text: `
    Nombre: ${nombre}\n
    Email:${email}\n 
    Mensaje:${mensaje}`
};


try{
    await transporter.sendMail(mailOptions);
    res.render('confirmacion',{
        nombre: req.body.nombre
    });
} catch (error){
    console.log(error);
    res.render('formulario', { error: 'Error al enviar mensaje'});
}


})
export {router as formularioController}
