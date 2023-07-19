import express from 'express';
const router = express.Router();
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employee.js';

router.route('/').post(createEmployee).get(getAllEmployees)
router.route('/:id').get(getEmployee).patch(updateEmployee).delete(deleteEmployee);

export default router;