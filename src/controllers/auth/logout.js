

const logout = async (req, res) => {
  try {
    res.json({message: 'logout'})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'o servidor deu erro ae, paizão',
    })
  }
};

export default logout;
