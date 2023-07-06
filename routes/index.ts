import { Router } from "npm:express@4.18.2";
import { get, getOk, getBad } from '../controllers/index.ts';

const router = new Router();

// example of a route with index controller get function
router.get('/', get);
router.get('/success', getOk);
router.get('/error', getBad);

export default router;
