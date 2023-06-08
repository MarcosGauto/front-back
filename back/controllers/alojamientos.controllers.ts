import { Request, Response } from "express";
import { db } from '../app';

export const alojamientosController: any = {
    getAlojamientos: async (req: Request, res: Response) =>{
        try{
            let resultado: any = await db.collection('Cabañas').find({}).toArray();

            res.status(200).json({
                "alojamientos": resultado
            })

        } catch (error:any) {

        }
    }
};