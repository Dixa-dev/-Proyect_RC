import { prisma } from "../../db.js";

export const createFacturaCliente = async (req, res) => {
  const { name, valor, efectivo, cheque, dolar, cotizacionDolar, estado, clienteId} =
    req.body;

       console.log(req.body);
  try {
    const newFacturaCliente = await prisma.facturaCliente.create({
      data: {
        name,
        valor,
        efectivo,
        cheque,
        dolar,
        cotizacionDolar,
        estado,
        clienteId
        // Conectar con el cliente existente con id 1
      },
      
      include: {
        cliente: true
      }
    });
 
    

    res.json({
      message: "Factura creada y asignada al cliente correctamente",
      newFacturaCliente
    });
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
      where: { id: parseInt(id) },
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
    const deletedFacturaCliente = await prisma.facturaCliente.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedFacturaCliente);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the facturaCliente." });
  }
};

export const updateFacturaCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const updatedFacturaCliente = await prisma.facturaCliente.update({
      where: { id: parseInt(id) },
      data: { data },
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
