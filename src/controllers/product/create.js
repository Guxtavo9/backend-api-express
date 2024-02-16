const create = (req, res) => {
    const product = req.body;
  res.json({
    message: "Esta é a Rota do Product post", product,
  });
}

export default create