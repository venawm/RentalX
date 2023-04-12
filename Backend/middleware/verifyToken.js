const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';
function verifyToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
      res.status(401).json({ message: 'Unauthorized: missing token' });
      return;
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized: invalid token' });
        return;
      }
      req.userId = decoded.id;
      next();
    });
  }  

  module.exports= verifyToken;