import { Request, Response } from "express";
import { db } from '../app';

export const reservasController: any = {
    getReservas: async (req: Request, res: Response) =>{
        try {

            //poner en el body de la request, la informacion de la reserva
            
            
            let resultado: any = (await db.collection('Reservas')).insertOne({
                fechaDeInicio: req.body.inicio,
                fechaFinal: req.body.final,
                cantidad: req.body.cantidad,
                cabaña: req.body.cabaña
            });

            return res.status(200).json({
                "reservas": resultado
            })

        } catch (error:any) {

            return res.status(500).json({
                message: error.message
            })

        }
    }
}

