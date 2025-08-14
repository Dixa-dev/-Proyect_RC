import {prisma} from "../../db.js";


export const getAllTrucks = async (req, res) => {
  try {
    const trucks = await prisma.truck.findMany();
    res.json(trucks);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching trucks." });
  }
}

export const getTruckById = async (req, res) => {
  try {
    const { id } = req.params;

    const truck = await prisma.truck.findUnique({
      where: { id: Number(id) },
    });
    if (!truck) {
      return res.status(404).json({ error: "Truck not found." });
    }

    res.json(truck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the truck." });
  }
};

export const createTruck = async (req, res) => {
  const { name, type, capacity } = req.body;
  try {
    const newTruck = await prisma.truck.create({
      data: { name, type, capacity },
    });
    res.status(201).json(newTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the truck." });
  }
};
export const updateTruck = async (req, res) => {
  const { id } = req.params;
  const { name, type, capacity } = req.body;

  try {
    const updatedTruck = await prisma.truck.update({
      where: { id: Number(id) },
      data: { name, type, capacity },
    });
    res.json(updatedTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the truck." });
  }
};


export const deleteTruck = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTruck = await prisma.truck.delete({
      where: { id: Number(id) },
    });
    res.json(deletedTruck);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the truck." });
  }
}