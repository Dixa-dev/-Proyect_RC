import {Router} from 'express';
const forhideRouter = Router();
import { createForHire, deleteForHire, getAllForHides, getForHireById, updateForHire} from '../controllers/forhide.controllers.js';


forhideRouter.get('/forhides', getAllForHides);       
forhideRouter.post('/forhide', createForHire);   
forhideRouter.get('/forhide/:id', getForHireById);
forhideRouter.put('/forhide/:id', updateForHire); // 
forhideRouter.delete('/forhide/:id', deleteForHire); // 

    


export default forhideRouter;