const asyncHandler = require("../middleware/asyncHandler.middleware");

const createCrudController = (Service, entityName = 'Item') => ({
    getAll: asyncHandler(async (req, res) => {
        const items = await Service.getAll();
        res.status(200).json(items);
    }),

    getById: asyncHandler(async (req, res) => {
        const item = await Service.getById(req.params.id);
        if (!item) {
            return res.status(404).json({
                message: `${entityName} not found`
            });
        }
        res.status(200).json(item);
    }),

    create: asyncHandler(async (req, res) => {
        const newItem = await Service.create(req.body);
        res.status(201).json(newItem);
    }),

    update: asyncHandler(async (req, res) => {
        const updatedItem = await Service.update(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({
                message: `${entityName} not found`
            });
        }
        res.status(200).json(updatedItem);
    }),

    delete: asyncHandler(async (req, res) => {
        const deletedItem = await Service.delete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({
                message: `${entityName} not found`
            });
        }
        res.status(200).json(deletedItem);
    })
});

module.exports = createCrudController;