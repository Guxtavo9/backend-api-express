const getById = (req, res) => {
  const id = req.params.id;
  res.json({
    message: `Esta é a Rota do Usuario ${id}`,
  });
};

export default getById