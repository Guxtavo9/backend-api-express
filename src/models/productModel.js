import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAll = () => {
  return prisma.product.findMany();
};

const getById = (id) => {
  return prisma.product.findUnique({ where: { id } });
};

const create = (name, qautify, avatar, price) => {
  return prisma.product.create({data: { name, qautify, avatar, price }});
};

const update = (id, name, qautify, avatar, price) => {
  return prisma.product.update({ where: { id }, data: { name, qautify, avatar, price } });
};

const deletear = (id) => {
  return prisma.delete( {where: { id }})
}

export default { getAll, getById, create, update, deletear };
