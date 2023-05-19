import Cort from "../models/Cort.js";

export const addItem = async(req, res) => {
    try {
        const item = req.body;
        const newItem = await new Cort(item);
        await newItem.save();
        return res.json({message: "Adding item to cort successfully done", newItem})
    } catch (error) {
        res.json({message: "Error while adding item to cort", error})
    }
}

