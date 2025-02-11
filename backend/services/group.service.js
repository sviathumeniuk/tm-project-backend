const Group = require("../models/group");

exports.getAllGroups = () => Group.find();

exports.getGroupById = (id) => Group.findById(id);

exports.createGroup = (groupData) => new Group(groupData).save();

exports.updateGroup = (id, groupData) => Group.findByIdAndUpdate(id, groupData, { new: true });

exports.deleteGroup = (id) => Group.findByIdAndDelete(id);