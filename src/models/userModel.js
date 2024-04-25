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
      message: "o nome deve conter no minimo 2 caracteres",
    })
    .max(200, {
      message: "o nome deve ter no maximo 200 caracteres",
    }),
  email: z
    .string({
      required_error: "o Email é obrigatorio",
    })
    .email({
      message: "email invalido",
    })
    .max(500, {
      message: "o email deve ter no maximo 500 caracteres",
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
    pass: z
    .string({
      required_error: "a Senha é obrigatorio",
      invalid_type_error: "a Senha deve ser uma String",
    })
    .min(8, {
      message: "a senhha deve conter no minimo 6 caracteres",
    })
});

const validadeUserToCreate = (name, email, avatar, pass) => {
  const partialUserSchema = userSchema.partial({ id: true });
  return partialUserSchema.safeParse({name, email, avatar, pass});
};

const getAll = () => {
  return prisma.user.findMany();
};

const getById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const create = (name, email, avatar, pass) => {
  return prisma.user.create({ data: { name, email, avatar, pass } });
};

const update = (id, name, email, avatar, pass) => {
  return prisma.user.update({ where: { id }, data: { name, email, avatar, pass} });
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
