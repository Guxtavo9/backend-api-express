import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  id: z.number({
    required_error: "o ID é obrigatorio",
    invalid_type_error: "o ID esse campo deve ser um Inteiro",
  }),
  name: z
    .string({
      required_error: "o Nome é obrigatorio",
      invalid_type_error: "o Nome deve ser uma String",
    })
    .min(2, {
      messege: "o nome deve conter no minimo 2 caracteres",
    })
    .max(200, {
      messege: "o nome deve ter no maximo 200 caracteres",
    }),
  email: z
    .string({
      required_error: "o Email é obrigatorio",
    })
    .email({
      messege: "email invalido",
    })
    .max(500, {
      messege: "o email deve ter no maximo 500 caracteres",
    }),
  avatar: z
    .string({
      required_error: "o Avatar é obrigatorio",
      invalid_type_error: "o Avatar deve ser uma String",
    })
    .url({
      invalid_type_error: "url invalida",
    })
    .max(1000),
});

const validadeUserToCreate = (name, email, avatar) => {
  const partialUserSchema = userSchema.partial({ id: true });
  return partialUserSchema.safeParse(name, email, avatar);
};

const getAll = () => {
  return prisma.user.findMany();
};

const getById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const create = (name, email, avatar) => {
  return prisma.user.create({ data: { name, email, avatar } });
};

const update = (id, name, email, avatar) => {
  return prisma.user.update({ where: { id }, data: { name, email, avatar } });
};

const deletear = (id) => {
  return prisma.delete({ where: { id } });
};

export default {
  getAll,
  getById,
  create,
  update,
  deletear,
  validadeUserToCreate,
};
