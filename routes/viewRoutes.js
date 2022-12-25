const viewController = require('./../controllers/viewController')
const express = require('express');
const router = express.Router();


router.get('/',viewController.getAllBlog)
// router.get('/',viewController.getoverview)

router.get('/blog/:id',viewController.getOneBlog)
router.get('/create-blog',viewController.Blog)
router.post('/upload',viewController.createBlog)
router.get('/update-page/:id',viewController.updatePage)
router.patch('/update-blog/:id',viewController.updtBlog)
router.get('/delete-blog/:id',viewController.deleteBlog)

router.get('/about',viewController.getAbout)
router.get('/contact',viewController.getContact)

module.exports=router;

