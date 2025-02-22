const Load = require('../models/load');

exports.getAllLoads = () => Load.find();

exports.getLoadById = (id) => Load.findById(id);

exports.createLoad = (loadData) => new Load(loadData).save();

exports.updateLoad = (id, loadData) => Load.findByIdAndUpdate(id, loadData, { new: true });

exports.deleteLoad = (id) => Load.findByIdAndDelete(id);