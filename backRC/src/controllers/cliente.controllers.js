import {prisma} from "../../db.js";


export const createclient = async (req, res) => {
    const { data } = req.body;
    try {
      const newclient = await prisma.client.create({
        data: data,
      });
      res.status(201).json(newclient);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the client." });
    }
  };

    export const getAllclients = async (req, res) => {
        try {
          const clients = await prisma.client.findMany();
          res.json(clients);
        } catch (error) {
          res
            .status(500)
            .json({ error: "An error occurred while fetching clients." });
        }
      };

    export const getclientById = async (req, res) => {   
    try {
      const { id } = req.params;
      const client = await prisma.client.findUnique({
        where: { id: parseInt(id) },
      });
      if (!client) {
        return res.status(404).json({ error: "client not found." });
      }
      res.json(client);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the client." });
    }
  };

    export const deleteclient = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedclient = await prisma.client.delete({
        where: { id: parseInt(id) },
      });
      res.json(deletedclient);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the client." });
    }
  }

    export const updateclient = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedclient = await prisma.client.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      if (!updatedclient) {
        return res.status(404).json({ error: "client not found." });
      }
      res.json(updatedclient);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the client." });
    }
  };