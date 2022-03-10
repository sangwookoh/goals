const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
// @desc Get goals
//  @route GET /api/goals
//  @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc set goals
//  @route POST /api/goals
//  @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("PLEASE ADD A TEXT FILED");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc Update goals
//  @route PUT /api/goals/:id
//  @access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400).json(goal);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
  // res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goals
//  @route Delete /api/goals/:id
//  @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400).json(goal);
    throw new Error("Goal not found");
  }
  await goal.remove()
  res.status(200).json({id:req.params.id})
  // const deleteGoal = await Goal.findByIdAndDelete(req.params.id);
  // res.status(200).json(deleteGoal);
  // res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
