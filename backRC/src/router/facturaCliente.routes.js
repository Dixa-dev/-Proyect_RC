import { Router } from "express";
import  * as facturaClienteControllers from "../controllers/facturaCliente.controllers.js";


const facturaClienteRouter = Router();

facturaClienteRouter.post('/facturaCliente', facturaClienteControllers.createFacturaCliente);
facturaClienteRouter.get('/facturaClientes', facturaClienteControllers.getAllFacturaClientes);
facturaClienteRouter.get('/facturaCliente/:id', facturaClienteControllers.getFacturaClienteById);
facturaClienteRouter.delete('/facturaCliente/:id', facturaClienteControllers.deleteFacturaCliente);
facturaClienteRouter.put('/facturaCliente/:id', facturaClienteControllers.updateFacturaCliente);

export default facturaClienteRouter;