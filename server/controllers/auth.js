import Users from "../models/Users.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//REGISTRATION
export const register = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "No request data"});
        const {username, password} = req.body;
        const isUsed = await Users.findOne({username});
        if(isUsed) return res.json({message: "This user is already exists"});

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await new Users({username, password: hash});
        const token = jwt.sign(
            { id: newUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '30d' }
        );
        await newUser.save();
        return res.json({newUser, message: "Register successfully done", token});
    } catch (error) {
        res.json({message: "Error while registering"})
    }
}

//LOGIN
export const login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await Users.findOne({username});
        if(!user) return res.json({message: "No such a user"});

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if(!isPasswordCorrect) return res.json({message: "Incorrect password"});

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );
        return res.json({user, token, message: "You are successfully login"})
    } catch (error) {
        res.json({message: "Error while login"})
    }
}

//GETME

export const getMe = async(req, res) => {
    try {
        const user = await Users.findById(req.userId);
        if(!user) return res.json({message: "No such a user"});
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );
        return res.json({user, token})
        
    } catch (error) {
        res.json({message: "Error while authentication"})
    }
}