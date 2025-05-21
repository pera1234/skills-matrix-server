const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const {
  getUsers, updateUser, deleteUser, addUserSkill
} = require('../controllers/user.controller');

router.get('/', auth, getUsers);
router.put('/:userId', auth, updateUser);
router.delete('/:userId', auth, deleteUser);
router.post('/:userId/skills', auth, addUserSkill);

module.exports = router;
