import jwt from 'jsonwebtoken';

export const jwtVerifi = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  } 
  
  const token = authHeader.split(" ")[1];
  console.log(token);
  

  try {
    const {name , password} = jwt.verify(token, process.env.JWT_SECRET);
    req.name = name;
    req.password = password;
    if (!req.name || !req.password) {
      return res.status(401).json({ error: "Invalid token payload" });
    }
    next
    
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
    
  }



  if (token !== process.env.JWT_SECRET) {
    return res.status(403).json({ error: "Invalid token" });
  }

  next();
}