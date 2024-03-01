import productModel from "../../models/productModel.js";

const listAll = async (req, res) => {
  try {
    const products = await productModel.getAll();
    return res.json({
      success: "produtos listados com sucesso",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'o servidor deu erro ae, paizão',
    })
  }
};

export default listAll;
