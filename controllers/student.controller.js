import { prisma } from "../lib/prisma.ts";
export const createStudent = async (req, res) => {
  try {
    const createdStudent = await prisma.student.create({
      data: req.body,
    });
    res
      .status(201)
      .json({ message: "Student created successfully!", data: createdStudent });
  } catch (error) {
    console.error("Student creation failed!",error);
    res.status(500).send("Internal server error!");
  }
};
