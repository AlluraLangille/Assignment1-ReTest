import { Request, Response } from 'express';
import { legends as initialLegends } from '../data/legends';

class LegendsController {
    private legends: Array<{ id: number; title: string; description: string; origin: string }>;
    private currentId: number;

    constructor() {
        this.legends = initialLegends.map((l: any) => ({
            id: l.id,
            title: l.name, // map 'name' to 'title' for frontend compatibility
            description: l.description,
            origin: l.origin
        }));
        this.currentId = this.legends.length > 0 ? Math.max(...this.legends.map((l) => l.id)) + 1 : 1;
    }

    createLegend = (req: Request, res: Response) => {
        const { title, description, origin } = req.body;
        if (!title || !description || !origin) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const newLegend = { id: this.currentId++, title, description, origin };
        this.legends.push(newLegend);
        res.status(201).json(newLegend);
    };

    getLegends = (_req: Request, res: Response) => {
        res.json(this.legends);
    };

    getLegendById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const legend = this.legends.find(l => l.id === id);
        if (!legend) {
            return res.status(404).json({ error: 'Legend not found' });
        }
        res.json(legend);
    };
}

export default LegendsController;
