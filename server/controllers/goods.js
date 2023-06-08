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

//add item to cart
export const addItem = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const { amount, ...rest } = req.body.additional;
        const item = await Good.findById(req.body.goodId);
        item.amount = amount;
        item.moreInfo = rest;
        await Users.findByIdAndUpdate(
            req.userId,
            { $push: { cort: item } }
        );
        return res.json({message: "Adding item to cart successfully done", item})
    } catch (error) {
        res.json({message: "Error while adding item to cart", error})
    }
}

//remove item from cart

export const removeItem = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const item = await Good.findById(req.body.goodId);
        await Users.findByIdAndUpdate(
            req.userId, 
            { $pull: { cort: item} }
        );
        return res.json({message: "Removing item from cart successfully done", item})
    } catch (error) {
        res.json({message: "Error while deleting item from cart", error})
    }
}

//add item to favorites
export const addItemToFavorites = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const item = await Good.findById(req.body.goodId);
        await Users.findByIdAndUpdate(
            req.userId,
            { $push: { favorites: item } } 
        )
        return res.json({message: "Adding item to favorites successfully done", item})
    } catch (error) {
        res.json({message: "Error while adding item to favorites", error})
    }
}

//remove item from favorites
export const removeItemFromFavorites = async(req, res) => {
    
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const item = await Good.findById(req.body.goodId);
        await Users.findByIdAndUpdate(
            req.userId,
            { $pull: { favorites: req.body.goodId } }
        )
        return res.json({message: "Removing item from favorites successfully done", item})
    } catch (error) {
        res.json({message: "Error while adding item to favorites", error})
    }
}

//make order
export const makeOrder = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Вы ничего не заказали"});
        const order = req.body;

        async function pushToOrder(obj) {
            await Users.findByIdAndUpdate(
                req.userId, 
                { $push: { order: obj } }
            )
        }

        await Promise.all(order.map(pushToOrder));
        await Users.findByIdAndUpdate(
            req.userId, 
            { $set: { cort: [] } })

        return res.json({message: "Ваш заказ принят. Скоро мы с вами свяжемся.", order})
    } catch (error) {
        res.json({message: "Error while making order"})
    }
}