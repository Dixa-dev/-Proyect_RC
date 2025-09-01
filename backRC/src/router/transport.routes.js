import { Router } from "express";


const transportRouter = Router();
import { getAllTransports, getTransportById, createTransport, updateTransport, deleteTransport } from '../controllers/transport.controllers.js';

transportRouter.get('/transports', getAllTransports);
transportRouter.get('/transport/:id',getTransportById)
transportRouter.post('/transport', createTransport);
transportRouter.put('/transport/:id', updateTransport);
transportRouter.delete('/transport/:id', deleteTransport);



export default transportRouter;