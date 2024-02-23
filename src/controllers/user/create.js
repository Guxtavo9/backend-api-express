import userModel from "../../models/userModel.js";

const create = async (req, res) => {

    const { name, email, avatar } = req.body
    const user = await userModel.create( name, email, avatar)
    return res.status(200).json({
      sucess: `o Usuario ${user.id} ta ai criado`,
      user
    });

};


export default create