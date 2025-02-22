const LoadService = require("../services/load.service");
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllLoads = asyncHandler(async (req, res) => {
  const loads = await LoadService.getAllLoads();
  res.status(200).json(loads);
});

exports.getLoadById = asyncHandler(async (req, res) => {
  const load = await LoadService.getLoadById(req.params.id);
  if (!load) {
    return res.status(404).json({ message: "Load not found" });
  }
  res.status(200).json(load);
});

exports.createLoad = asyncHandler(async (req, res) => {
  const newLoad = await LoadService.createLoad(req.body);
  res.status(201).json(newLoad);
});

exports.updateLoad = asyncHandler(async (req, res) => {
  const updatedLoad = await LoadService.updateLoad(req.params.id, req.body);
  if (!updatedLoad) {
    return res.status(404).json({ message: "Load not found" });
  }
  res.status(200).json(updatedLoad);
});

exports.deleteLoad = asyncHandler(async (req, res) => {
  const deletedLoad = await LoadService.deleteLoad(req.params.id);
  if (!deletedLoad) {
    return res.status(404).json({ message: "Load not found" });
  }
  res.status(200).json(deletedLoad);
});