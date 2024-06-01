// import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler'
// import User from '../models/UserModel'

// export interface IGetUserAuthInfoRequest extends Request {
//   user: string // or any other type
// }

// export const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Get the token from header
//       token = req.headers.authorization.split(' ')[1]

//       // Verify token
//       const decoded= jwt.verify(token, process.env.JWT_SECRET as string)

//       // Get user from token
//       req.user = await User.findById(decoded.id).select('-password')

//       next()
//     }
//   }
// })
