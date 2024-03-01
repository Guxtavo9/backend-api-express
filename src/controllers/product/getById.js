import productModel from "../../models/productModel.js";

const getById = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.getById(parseInt(id))
  return res.status(200).json({
    sucess: `o Produto ${id} ta ai`,
    product
  });
};

export default getById