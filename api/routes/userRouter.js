const router = require("express").Router();
const User = require('../models/UserModel')
const bcrypt = require("bcrypt");
const {verifyToken, verifyTokenAndAuthor, verifyTokenAndAdmin} = require("./verifyToken")

//update
router.put("/:id",verifyTokenAndAuthor,  async (req, res) => {
   
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                return res.status(500).json(err)
            }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }else {
        return res.status(403).json("You can't update your account!")
    }
})

//delete
router.delete("/:id", verifyTokenAndAdmin,  async (req, res) => {
  
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            console.log(21, user);
            res.status(200).json("account has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    
})

//get a user
router.get("/find/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all user:
//verifyTokenAndAdmin
router.get("/", async(req, res) => {
    const query = req.query.new
    try {
        const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
        // const {password, updatedAt, ...other} = users._doc
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router