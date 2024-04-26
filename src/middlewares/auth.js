import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

const auth = (req, res, next) => {
  let token = false;
  token = req.cookies?.token;
  token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "usuario não autenticado",
    });
  }

  try {
    const { id, name } = jwt.verify(token, SECRET_KEY);
    req.userLogged = { id, name, token};
    tokenIsValid = jwt.verify(token, SECRET_KEY);
    console.log(tokenIsValid);
  } catch (error) {
    if (error.name === "tokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Token expirado", code: "expired-token" });
    }
    return res
      .status(401)
      .json({ error: "Token invalido", code: "invalid-token)" });
  }

  next();
};

export default auth;
