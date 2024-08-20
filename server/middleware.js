import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET



export const auth = (req, res, next) => {
  const token = req.headers['authorization'] || req?.cookies?.token
  

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {    
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Invalid token' })
  }
}

export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Forbidden' })
  }
  next()
}
