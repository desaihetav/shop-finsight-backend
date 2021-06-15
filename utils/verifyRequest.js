const secret = process.env.SECRET
const jwt = require('jsonwebtoken');

function verifyRequest(req, res, next) {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(403).json({ success: false, message: "Invalid Token" })
  }
  try {
    const decode = jwt.verify(token, secret);
    req.user = {
      userId: decode.userId
    }
    console.log('–––––verified–––––');
    return next()
  } catch (err) {
    console.log(err)
    return res.status(403).json({ success: false, message: "Invalid Token" })
  }
}

module.exports = verifyRequest