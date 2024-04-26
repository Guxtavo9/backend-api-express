import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const create = async (session) => {
  return prisma.session.create({ data: { session } });
};
const removeSession = async (session) => {
  return prisma.session.delete({
    data: {
      where: {
        userId,
        token,
      },
    },
  });
};

export default { create, update, removeSession };
