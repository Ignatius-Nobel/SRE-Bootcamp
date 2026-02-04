import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { createStudentSchema } from "../validations/student.validation.js";
import { createStudent } from "../controllers/student.controller.js";

const router = Router()

router.post("/",validate(createStudentSchema),createStudent)

export default router