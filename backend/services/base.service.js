const createGenericService = (Model) => ({
  getAll: () => Model.find(),

  getById: (id) => Model.findById(id),

  create: (data) => new Model(data).save(),

  update: (id, data) => Model.findByIdAndUpdate(id, data, { new: true }),

  delete: (id) => Model.findByIdAndDelete(id),
});

module.exports = createGenericService;