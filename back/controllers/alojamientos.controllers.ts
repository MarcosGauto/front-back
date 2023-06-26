import { Request, Response } from "express";
import { db } from '../app';

export const alojamientosController: any = {
    getAlojamientos: async (req: Request, res: Response) =>{
        try{
            let resultado: any = await db.collection('Cabañas').find({}).toArray();

            return res.status(200).json({
                "alojamientos": resultado
            })

        } catch (error:any) {

            return res.status(500).json({
                message: error.message
            })
        }
    }
};