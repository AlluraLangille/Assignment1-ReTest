import { Router } from 'express';

import LegendsController from '../controllers/legendsController';

const router = Router();
const legendsController = new LegendsController();

export function setLegendsRoutes(app: any) {
    app.use('/api/legends', router);

    router.post('/', legendsController.createLegend.bind(legendsController));
    router.get('/', legendsController.getLegends.bind(legendsController));
    router.get('/:id', legendsController.getLegendById.bind(legendsController));
    // Add update and delete if needed
}
