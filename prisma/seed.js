const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcryptjs");;
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);
  const user1 = await prisma.user.create({
    data: { name: 'Alice Tester', email: 'alice@example.com', password: hashedPassword }
  });
  const user2 = await prisma.user.create({
    data: { name: 'Bob Developer', email: 'bob@example.com', password: hashedPassword }
  });
  await prisma.skill.createMany({
    data: [
      { name: 'JavaScript', level: 'Advanced', userId: user1.id },
      { name: 'React', level: 'Intermediate', userId: user1.id },
      { name: 'Node.js', level: 'Advanced', userId: user2.id },
    ]
  });
  console.log('Seed complete');
}
main().catch(console.error).finally(() => prisma.$disconnect());
