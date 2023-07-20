import Employee from '../models/Employee.js'
import { StatusCodes } from 'http-status-codes';
import UnauthenticatedError from '../errors/index.js'
import BadRequestError from '../errors/index.js'

const register = async (req, res) => {
    const employee = await Employee.create({ ...req.body })
    const token = employee.createJWT()

    // first value is the database name, the second value is the name you store it in the above i.e employee
    res.status(StatusCodes.CREATED).json({ employee: {_id: employee.id, name: employee.name}, token})
};

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const employee = await Employee.findOne({ email })
  if (!employee) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await employee.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = employee.createJWT()
  res.status(StatusCodes.OK).json({ employee: { name: employee.name }, token })
};

export { register, login };