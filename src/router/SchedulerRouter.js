import express from 'express';

import ScheduleController from '../controller/SchedulerController.js';

const ScheduleRouter = express.Router();

const scheduleController = new ScheduleController();

ScheduleRouter.get('/api/schedulers', scheduleController.index);
ScheduleRouter.get('/api/schedulers:id', scheduleController.getOne);
ScheduleRouter.post('/api/schedulers', scheduleController.store);
ScheduleRouter.put('/api/schedulers:id', scheduleController.update);
ScheduleRouter.delete('/api/schedulers:id', scheduleController.remove);

export default ScheduleRouter;
