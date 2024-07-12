import Resource from "../model/resource.model.js";

export const getResource= async (req,res)=>{
    try {
        const resource = await Resource.find();
        res.status(200).json(resource)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}