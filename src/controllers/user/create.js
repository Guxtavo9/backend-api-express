import userModel from "../../models/userModel.js";
// import { zodErrorFormat } from "../../helpers/zodErrorFormat.js";

const create = async (req, res) => {
  const { name, email, avatar } = req.body;
  const result = userModel.validadeUserToCreate(name, email, avatar);
  console.log(result);
  if (!result.success) {
    const errorFormated = result.error.flatten()
    return res.status(400).json({
      error: "dados de cadastro invalidos",
      fields: errorFormated.fieldErrors
    });
  }

  const user = await userModel.create(name, email, avatar);
  return res.status(200).json({
    success: `o Usuario ${user.id} ta ai criado`,
    user,
  });
};

export default create;
