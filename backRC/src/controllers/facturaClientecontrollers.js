import {prisma} from "../../db.js";

export const createFacturaCliente = async (req, res) => {
    const { data} = req.body;
    try {
      const newFacturaCliente = await prisma.facturaCliente.create({
        data: { data },
      });
      res.status(201).json(newFacturaCliente);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the facturaCliente." });
    }
  };
  
  export const getAllFacturaClientes = async (req, res) => {
    try {
      const facturaClientes = await prisma.facturaCliente.findMany();
      res.json(facturaClientes);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching facturaClientes." });
    }
  }; 

    export const getFacturaClienteById = async (req, res) => {   
    try {
      const { id } = req.params;
  
      const facturaCliente = await prisma.facturaCliente.findUnique({
        where: { id: Number(id) },
      });
      if (!facturaCliente) {
        return res.status(404).json({ error: "FacturaCliente not found." });
      }
  
      res.json(facturaCliente);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the facturaCliente." });
    }
  };

    export const deleteFacturaCliente = async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.facturaCliente.delete({
        where: { id: Number(id) },
      });
      res.status(204).send();
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the facturaCliente." });
    }
  };

export const updateFacturaCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFacturaCliente = await prisma.facturaCliente.update({
      where: { id: Number(id) },
      data: req.body,
    });
    if (!updatedFacturaCliente) {
      return res.status(404).json({ error: "FacturaCliente not found." });
    }
    res.json(updatedFacturaCliente);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the facturaCliente." });
  }
};