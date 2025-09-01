import { Router } from "express";

const driverRouter = Router();

import { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver } from '../controllers/driver.controllers.js';

driverRouter.get('/drivers', getAllDrivers);         
driverRouter.get('/driver/:id',getDriverById)
driverRouter.post('/driver', createDriver);
driverRouter.put('/driver/:id', updateDriver);
driverRouter.delete('/driver/:id', deleteDriver);



export default driverRouter;