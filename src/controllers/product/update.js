import userModel from "../../models/userModel.js";

const update = async (req, res) => {
    const { id, name, email, avatar } = req.body
    const user = await userModel.update(id, name, email, avatar)
    return res.status(200).json({
      sucess: `o Usuario ${id} ta ai editado`,
      user
    });

};


export default update