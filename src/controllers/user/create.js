const create = (req, res) => {
    const user = req.body;
  res.json({
    message: "Esta é a Rota do Usuario post", user,
  });
}

export default create