import Good from "../models/Good.js";


//getting goods from db
export const getGoods = async(req, res) => {
    try {
        const goods = await Good.find({});
        return res.json({message: "Data were successfully loaded", goods})
    } catch (error) {
        res.json({message: "Error while getting goods"})
    }
}