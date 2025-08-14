import { prisma } from "../../db.js";

export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await prisma.driver.findMany();
    res.json(drivers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching drivers." });
  }
};

export const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;

    const driver = await prisma.driver.findUnique({
      where: { id: Number(id) },
    });
    if (!driver) {
      return res.status(404).json({ error: "Truck not found." });
    }

    res.json(driver);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the driver." });
  }
};


export const createDriver = async (req, res) => {
  const { patent, brand, model, year, numberChassis, trackerBrand, numberPermission, expirationPermission, policyNumber, policyExpiration, nameOwner, phoneOwner} = req.body;
  try {
    const newTruck = await prisma.driver.create({
      data: { patent, brand, model, year, numberChassis, trackerBrand, numberPermission, expirationPermission, policyNumber, policyExpiration, nameOwner, phoneOwner },
    });
    res.status(201).json(newTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the driver." });
  }
};

export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const { patent, brand, model, year, numberChassis, trackerBrand, numberPermission, expirationPermission, policyNumber, policyExpiration, nameOwner, phoneOwner } = req.body;

  try {
    const updatedTruck = await prisma.driver.update({
      where: { id: Number(id) },
      data: { patent, brand, model, year, numberChassis, trackerBrand, numberPermission, expirationPermission, policyNumber, policyExpiration, nameOwner, phoneOwner },
    });
    res.json(updatedTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the driver." });
  }
};

export const deleteDriver = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTruck = await prisma.driver.delete({
      where: { id: Number(id) },
    });
    res.json(deletedTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the driver." });
  }
};
