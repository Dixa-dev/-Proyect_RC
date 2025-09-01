import {prisma} from "../../db.js";



export const createForHire = async (req, res) =>{

    const  {name,code,address,email,permitExpiration,nacionality,havePermission,numberPermission} = req.body;
    try {
        const newForHire = await prisma.forHire.create({
            data:{
                name,
                code,
                address,
                email,
                permitExpiration,
                nacionality,
                havePermission,
                numberPermission
            }
        });
        res.status(201).json(newForHire);   
    } catch (error) {
        res.status(500).json({error: "An error occurred while creating the forHire."});
        
    }
}


export const getAllForHides =async (req , res) => {

    try {
        const forHides = await prisma.forHire.findMany();
        res.status(200).json(forHides);

    } catch (error) {
        res.status(500).json({error: "An error occurred while fetching forHides."});
        
    }
    
}

export const getForHireById = async (req, res) => {
  try {
    const { id } = req.params;

    const forHire = await prisma.forHire.findUnique({
      where: { id: Number(id) },
    });
    if (!forHire) {
      return res.status(404).json({ error: "For Hire not found." });
    }

    res.json(forHire);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the for hire." });
  }
}

export const updateForHire = async (req, res) => {
  const { id } = req.params;
  const { name, code, address, email, permitExpiration, nacionality, havePermission, numberPermission } = req.body;

  try {
    const updatedForHire = await prisma.forHire.update({
      where: { id: Number(id) },
      data: { name, code, address, email, permitExpiration, nacionality, havePermission, numberPermission },
    });
    res.json(updatedForHire);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the for hire." });
  }
}

export const deleteForHire = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedForHire = await prisma.forHire.delete({
      where: { id: Number(id) },
    });
    res.json(deletedForHire);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the for hire." });
  }
}