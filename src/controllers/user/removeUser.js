import userModel from "../../models/userModel.js";
const removeUser = async (req, res) => {
    const id = parseInt(req.params.id)
    const morte = await prisma.userModel.deletear(id)

    return res.json({
      message: `O Usuario ${id} Morreu`,
    });
    morte
  }
  export default removeUser