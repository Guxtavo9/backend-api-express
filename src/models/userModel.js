import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAll = () => {
  return prisma.user.findMany();
};

const getById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const create = (name, email, avatar) => {
  return prisma.user.create({data: { name, email, avatar }});
};

const update = (id, name, email, avatar) => {
  return prisma.user.update({ where: { id }, data: { name, email, avatar } });
};

export default { getAll, getById, create, update };
