import Good from "../models/Good.js";
import Users from "../models/Users.js";

//getting goods from db
export const getGoods = async(req, res) => {
    try {
        const goods = await Good.find({});
        return res.json({message: "Data were successfully loaded", goods})
    } catch (error) {
        res.json({message: "Error while getting goods"})
    }
}

//add item to cort
export const addItem = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const item = await Good.findById(req.body.goodId);
        await Users.findByIdAndUpdate(
            req.userId, 
            { $push: { cort: item } }
        );
        const user = await Users.findById(req.userId);
        return res.json({message: "Adding item to cort successfully done", item})
    } catch (error) {
        res.json({message: "Error while adding item to cort", error})
    }
}