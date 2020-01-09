import jwt from 'jsonwebtoken';

function tokenDecode() {
  const token = localStorage.getItem('token');

  const userObj = jwt.decode(token);
  return userObj;
}

export default tokenDecode;