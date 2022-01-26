const router = require("express").Router();
const Post = require("../models/PostModel")

//create a post
router.post("/add", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all posts
router.get("/", async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get a post:
router.get("/find/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

//update a post"
router.put("/:id", async (req, res) => {
   try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({$set: req.body})
            res.status(200).json("Post has been updated!")
        }else {
            res.status(403).json("You can update your post!!")
        }
   } catch (error) {
        res.status(500).json(error)
   }
})

//delete a post:
router.delete("/:id", async (req, res) => {
    try {
         const post = await Post.findById(req.params.id);
         if(post.userId === req.body.userId || req.body.role === 'admin') {
             await post.deleteOne()
             res.status(200).json("Post has been delete!")
         }else {
             res.status(403).json("You can delete only your post!!")
         }
    } catch (error) {
         res.status(500).json(error)
    }
 })

 //like/dislike a post:
 router.put("/:id/like", async (req, res) => {
    try {
         const post = await Post.findById(req.params.id);
         if(!post.likes.includes(req.body.userId)) {
             await post.updateOne({$push: {likes: req.body.userId}})
             res.status(200).json("Post has been liked!")
         }else {
             await post.updateOne({$pull: {likes: req.body.userId}})
             res.status(200).json("Post has been disliked!")
         }
    } catch (error) {
         res.status(500).json(error)
    }
 })

module.exports = router;