import userModel from "../../models/userModel.js";
// import { zodErrorFormat } from "../../helpers/zodErrorFormat.js";

const create = async (req, res) => {

  try{}catch{}
  const { name, email, avatar } = req.body;
  const result = userModel.validadeUserToCreate(name, email, avatar);

  if (!result.success) {
    const errorFormated = result.error.format()
    delete errorFormated._errors
    errorFormated.name ? errorFormated.name = errorFormated.name._errors : null
    errorFormated.email ? errorFormated.email = errorFormated.email._errors : null
    errorFormated.avatar ? errorFormated.avatar = errorFormated.avatar._errors : null
    return res.status(400).json({
      error: "dados de cadastro invalidos",
      fields: rerrorFormated
    });
  }

  const user = await userModel.create(name, email, avatar);
  return res.status(200).json({
    success: `o Usuario ${user.id} ta ai criado`,
    user,
  });
};

export default create;
