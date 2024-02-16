const removeUser = (req, res) => {
    const id = req.params.id;
    res.json({
      message: `Esta é a Rota do Usuario ${id} delete`,
    });
  }
  export default removeUser