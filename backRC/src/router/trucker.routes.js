import { Router } from "express"; 
import { getAllTrucks, getTruckById, createTruck, updateTruck, deleteTruck } from '../controllers/truck.controllers.js';

const truckerRouter = Router();

truckerRouter.get('/truckers', getAllTrucks);
truckerRouter.get('/truck/:id',getTruckById)
truckerRouter.post('/truck', createTruck);
truckerRouter.put('/truck/:id', updateTruck);
truckerRouter.delete('/truck/:id', deleteTruck);



export default truckerRouter;

