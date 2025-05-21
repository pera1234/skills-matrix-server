const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const data = await prisma.user.findMany({ skip, take: limit, include: { skills: true } });
  const total = await prisma.user.count();
  res.json({ data, total, page });
};

exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: req.params.userId }, data: { name, email }
    });
    res.json(user);
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: req.params.userId } });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(404).json({ error: 'User not found' });
  }
};

exports.addUserSkill = async (req, res) => {
  const { name, level } = req.body;
  try {
    const skill = await prisma.skill.create({
      data: { name, level, userId: req.params.userId }
    });
    res.json(skill);
  } catch {
    res.status(400).json({ error: 'Invalid data' });
  }
};
