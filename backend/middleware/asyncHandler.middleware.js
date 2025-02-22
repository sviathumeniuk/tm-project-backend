const asyncHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch((error) => {
    res.status(error.statusCode || 500).json({ error: error.message });
  });
};

module.exports = asyncHandler;