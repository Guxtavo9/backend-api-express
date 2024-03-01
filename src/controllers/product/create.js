import productModel from "../../models/productModel.js";

const create = async (req, res) => {

    const { name, qautify, avatar, price } = req.body
    const product = await productModel.create( name, qautify, avatar, price)
    return res.status(200).json({
      sucess: `o Produto ${product.id} ta ai criado`,
      product
    });

};


export default create