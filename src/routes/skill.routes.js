const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const {
  getSkills, updateSkill, deleteSkill
} = require('../controllers/skill.controller');

router.get('/', auth, getSkills);
router.put('/:skillId', auth, updateSkill);
router.delete('/:skillId', auth, deleteSkill);

module.exports = router;
