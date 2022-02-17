const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/",(req, res)=>{
    res.send("use...")
})

//register:
router.post("/register", async (req, res)=>{
 
    try {
        console.log(12,req.body);
        //generate new Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create newUser
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            profilePicture : req.body.profilePicture,
            password: hashedPassword,
            profilePicture: req.body.profilePicture
        });

        //save and return user:
        const user =  await newUser.save();
        res.status(200).json(user);

    }catch(err){
        // res.status(500).json(error)
        console.log(err);
    }
 
})

//login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        !user && res.status(404).send("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Invalid Password")
        
        const accessToken = jwt.sign(
            {
                id: user._id, 
                role: user.role
            },
            process.env.JWT_SEC,
            {expiresIn: '10d'}

        )
        const {password, ...others} = user._doc
        res.status(200).json({...others, accessToken})
    } catch (error) {
       res.status(500).json(error)
    }  
})

module.exports = router