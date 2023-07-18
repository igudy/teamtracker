import express from 'express';
import { register } from '../controllers/auth';
const router = express.Router();
import { getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee';

router.route('/').post(createEmployee).get(getAllEmployees)
router.route('/:id').get(getEmployee).patch(updateEmployee).delete.apply(deleteEmployee);

export default router;