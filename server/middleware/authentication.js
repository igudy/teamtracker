import Employee from '../models/Employee.js';
import jwt from 'jsonwebtoken';
import UnauthenticatedError from '../errors/index.js';

 const auth = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError("Authentication invalid")
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the employee to the job routes
        req.employee = {employeeId: payload.employee, name: payload.name}
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
  }
}


export default auth


// // import Employee from '../models/Employee';
// import jwt from 'jsonwebtoken';
// import { UnauthenticatedError } from '../errors/index';

// const auth = async (req, res, next) => {
//   // check header
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     throw new UnauthenticatedError('Authentication invalid');
//   }
//   const token = authHeader.split(' ')[1];

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     // attach the employee to the job routes
//     req.employee = { employeeId: payload.employeeId, name: payload.name };
//     next();
//   } catch (error) {
//     throw new UnauthenticatedError('Authentication invalid');
//   }
// };

// export default auth
