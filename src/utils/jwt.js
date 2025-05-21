const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
exports.generate = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' });
