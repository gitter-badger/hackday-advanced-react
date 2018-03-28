module.exports = (req, res, next) => {
  const rnd = Math.floor(Math.random() * 5)
  if (rnd === 0) {
    return res.json([])
  }
  return next()
}
