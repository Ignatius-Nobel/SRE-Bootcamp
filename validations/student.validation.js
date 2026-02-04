import { z } from "zod";

const GenderEnum = z.enum(["male","female","other"])

export const createStudentSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email:z.email(),
    phone: z.string().optional(),
    address: z.string(),
    gender: GenderEnum
  }),
});
