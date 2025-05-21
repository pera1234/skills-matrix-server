const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getSkills = async (req, res) => {
  const { name, level } = req.query;
  const where = {};
  if (name) where.name = { contains: name, mode: 'insensitive' };
  if (level) where.level = { equals: level };
  const skills = await prisma.skill.findMany({ where, include: { user: true } });
  res.json(skills);
};

exports.updateSkill = async (req, res) => {
  const { name, level } = req.body;
  try {
    const skill = await prisma.skill.update({
      where: { id: req.params.skillId }, data: { name, level }
    });
    res.json(skill);
  } catch {
    res.status(404).json({ error: 'Skill not found' });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await prisma.skill.delete({ where: { id: req.params.skillId } });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(404).json({ error: 'Skill not found' });
  }
};
