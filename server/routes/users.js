const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


////UPDATE
router.put("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            },
            {
                new:true
            });
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You can Update only your Account!")
    }
})
////DELETE
router.delete("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id){
        
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User is Removed");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You can Update only your Account!")
    }
})


// Get Users
router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        const {password, ...lola} = user._doc;
        res.status(200).json(lola);
    }catch(err){
        res.status(500).json(err);
    }
    })


module.exports = router