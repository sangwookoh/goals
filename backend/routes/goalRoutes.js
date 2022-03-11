const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoals,
  setGoals,
  updateGoals,
} = require("../controllers/goalController");

// 아래 두줄(공통되는 route)를 한줄로 적을수 있음

const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

// // C
// router.post("/", setGoals);

// //R
// router.get("/", getGoals);

// // U
// router.put("/:id", updateGoals);

// // D
// router.delete("/:id", deleteGoals);

module.exports = router;
