import { Router } from "express";
import  * as clienteControllers from "../controllers/cliente.controllers.js";


const routerCliente = Router();


routerCliente.post('/cliente', clienteControllers.createclient);
routerCliente.get('/clientes', clienteControllers.getAllclients);
routerCliente.get('/cliente/:id', clienteControllers.getclientById);
routerCliente.delete('/cliente/:id', clienteControllers.deleteclient);
routerCliente.put('/cliente/:id', clienteControllers.updateclient);


export default routerCliente;