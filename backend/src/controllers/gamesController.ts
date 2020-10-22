import {Request, Response} from 'express';
import db from '../database';

class GamesController {
    public async list(req: Request,res: Response): Promise<void> {
        const games = await db.query('Select * from games');
        res.status(200).json(games);
    }

    public async getOne(req: Request,res: Response): Promise<void> { 
        const {id} = req.params;
        const game = await db.query('Select * from games where id = ?',id);
        res.status(200).json(game[0]);        
    }

    public async create(req: Request, res: Response): Promise<void> {
        const game = await db.query('Insert into games set ?', [req.body]);
        res.status(201).json({message:'Game saved'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await db.query('Update games set ? where id = ?',[req.body,id])
        res.status(200).json({message:`game was updated`});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await db.query('Delete from games where id = ?',[id]);
        res.status(200).json({message:`game was deleted`});
    }
}

export const gamesController = new GamesController();