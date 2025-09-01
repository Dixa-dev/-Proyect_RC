import { prisma } from "../../db.js";

export const getAllTransports = async (req, res) => {
  try {
    const transports = await prisma.transport.findMany();
    res.json(transports);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching transports." });
  }
};

export const getTransportById = async (req, res) => {
  try {
    const { id } = req.params;

    const transport = await prisma.transport.findUnique({
      where: { id: Number(id) },
    });
    if (!transport) {
      return res.status(404).json({ error: "Transport not found." });
    }

    res.json(transport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the transport." });
  }
};

export const createTransport = async (req, res) => {
  const {
    name,
    address,
    country,
    numberPemission,
    expirationPermission,
    numberPolicy,
    expirationPolicy,
    nameRepresentative,
    phoneRepresentative,
    emailRepresentative,
    nameResponsible,
    phoneResponsible,
    emailResponsible,
    proxy,
    referencePerson,
  } = req.body;

  try {
    const newTransport = await prisma.transport.create({
      data: {
        name,
        address,
        country,
        numberPemission,
        expirationPermission,
        numberPolicy,
        expirationPolicy,
        nameRepresentative,
        phoneRepresentative,
        emailRepresentative,
        nameResponsible,
        phoneResponsible,
        emailResponsible,
        proxy,
        referencePerson,
      },
    });
    res.status(201).json(newTransport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the transport." });
  }
};

export const updateTransport = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    address,
    country,
    numberPemission,
    expirationPermission,
    nameRepresentative,
    phoneRepresentative,
    emailRepresentative,
    nameResponsible,
    phoneResponsible,
    emailResponsible,
    proxy,
    referencePerson,
  } = req.body;

  try {
    const updatedTransport = await prisma.transport.update({
      where: { id: Number(id) },
      data: {
        name,
        address,
        country,
        numberPemission,
        expirationPermission,
        nameRepresentative,
        phoneRepresentative,
        emailRepresentative,
        nameResponsible,
        phoneResponsible,
        emailResponsible,
        proxy,
        referencePerson,
      },
    });
    res.json(updatedTransport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the transport." });
  }
};

export const deleteTransport = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransport = await prisma.transport.delete({
      where: { id: Number(id) },
    });
    res.json(deletedTransport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the transport." });
  }
};
