const mockUser = {
  id: 'user1',
  email: 'test@example.com',
  password: 'hashed',
  name: 'Test User',
};

const mockSkill = {
  id: 'skill1',
  name: 'React',
  level: 'Intermediate',
  userId: 'user1',
};

const prisma = {
  user: {
    findUnique: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue({}),
    findMany: jest.fn().mockResolvedValue([mockUser]),
    count: jest.fn().mockResolvedValue(1),
  },
  skill: {
    create: jest.fn().mockResolvedValue(mockSkill),
    update: jest.fn().mockResolvedValue(mockSkill),
    delete: jest.fn().mockResolvedValue({}),
    findMany: jest.fn().mockResolvedValue([mockSkill]),
  },
};

module.exports = {
  PrismaClient: jest.fn(() => prisma),
};