const GroupService = require("../services/group.service");
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllGroups = asyncHandler(async (req, res) => {
    const groups = await GroupService.getAllGroups();
    res.status(200).json(groups);
});

exports.getGroupById = asyncHandler(async (req, res) => {
    const group = await GroupService.getGroupById(req.params.id);
    if (!group) {
        return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(group);
});

exports.createGroup = asyncHandler(async (req, res) => {
    const newGroup = await GroupService.createGroup(req.body);
    res.status(201).json(newGroup);
});

exports.updateGroup = asyncHandler(async (req, res) => {
    const updatedGroup = await GroupService.updateGroup(req.params.id, req.body);
    if (!updatedGroup) {
        return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(updatedGroup);
});

exports.deleteGroup = asyncHandler(async (req, res) => {
    const deletedGroup = await GroupService.deleteGroup(req.params.id);
    if (!deletedGroup) {
        return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(deletedGroup);
});