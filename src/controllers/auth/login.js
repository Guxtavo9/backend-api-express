import userModel from "../../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import sessionModel from "../../models/sessionModel";

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
      { expiresIn: "1h" }
    );
    //3 * 30 * 24 * 60 * 60 * 1000,
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    await sessionModel.create({
      userId: userFound,
      token,
    });

    res.json({ message: "login" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "o servidor deu erro ae, paizão",
    });
  }
};

export default login;
