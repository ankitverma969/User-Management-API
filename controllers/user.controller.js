import { users } from "../data/users.js";

export const createUser = (req, res) => {
    try{
        const {name, email} = req.body;

        if(!name || !email){
            return res.status(400).json({
                success: false,
                message: "Name and email are required"
            });
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            data: newUser
        });

    } catch (error){
        res.status(500).json({
            success: false,
            message : error.message
        });
    }
}