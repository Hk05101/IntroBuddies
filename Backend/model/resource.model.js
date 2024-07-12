import mongoose from "mongoose";

const resourceSchema=mongoose.Schema({
    name: String,
    UID: String,
    category: String,
    image: String,
    title: String
})
const Resource = mongoose.model("Resource",resourceSchema)

export default Resource;