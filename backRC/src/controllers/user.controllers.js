
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



export const getById = async (req, res) => {
  try {
    const { id } = req.params;
  
    
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
   
    res.json(user);   

  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user." });  
  }
}



export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
}



export const createUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await prisma.user.create({
      data: { name, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating the user." });
  }   

}



export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    ;
    
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: req.body,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the user." });
  }

}


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
}