import userModel from "../../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

const login = async (req, res) => {
  try {
    const { email, pass } = req.body;

    const result = userModel.validadeUserToLogin(email, pass);
    console.log(result);
    if (!result.success) {
      const errorFormated = result.error.flatten();
      return res.status(400).json({
        error: "dados de login invalidos",
        fields: errorFormated.fieldErrors,
      });
    }

    const userFound = await userModel.getByEmail(email);
    if (!userFound) {
      return res.status(401).json({
        error: "email ou senha ivalidos",
      });
    }

    const passIsValid = await bcrypt.compare(pass, userFound.pass);
    if (!passIsValid) {
      return res.status(401).json({
        error: "email ou senha ivalidos",
      });
    }
    const token = jwt.sign(
      { id: userFound.id, name: userFound.name },
      SECRET_KEY,
      { expiresIn: "3m" }
    );

    res.json({ message: "login" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "o servidor deu erro ae, paizão",
    });
  }
};

export default login;
