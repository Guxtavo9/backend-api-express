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
    }),
});

const validadeUserToCreate = (name, email, avatar, pass) => {
  const partialUserSchema = userSchema.partial({ id: true });
  return partialUserSchema.safeParse({ name, email, avatar, pass });
};
const validadeUserToUpdate = (name, email, avatar, pass) => {
  const partialUserSchema = userSchema.partial({ pass: true });
  return partialUserSchema.safeParse({ id, name, email, avatar, });
};
const validadeUserToLogin = (name, email, avatar, pass) => {
  const partialUserSchema = userSchema.partial({ pass: true });
  return partialUserSchema.safeParse({ id, name, email, avatar, });
};

const getAll = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
};

const getById = (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
};

const getByEmail = (email) => {
  return prisma.user.findUnique({
    where: { 
      email
     },
  });
};

const create = (name, email, avatar, pass) => {
  return prisma.user.create({
    data: { name, email, avatar, pass },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
};

const update = (id, name, email, avatar) => {
  return prisma.user.update({
    where: { id },
    data: { name, email, avatar },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
};

const deletear = (id) => {
  return prisma.delete({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
};

export default {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  deletear,
  validadeUserToCreate,
  validadeUserToUpdate,
  validadeUserToLogin,
};
