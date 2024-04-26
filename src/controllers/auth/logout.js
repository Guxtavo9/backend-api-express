import sessionModel from "../../models/sessionModel";

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    await sessionModel.removeSession(req.userLogged.id, req.userLogged.token)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "o servidor deu erro ae, paizão",
    });
  }
};

export default logout;
