import productModel from "../../models/productModel.js";
const removeProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    const morte = await prisma.productModel.deletear(id)

    return res.json({
      message: `O Usuario ${id} Morreu`,
    });
    morte
  }
  export default removeProduct