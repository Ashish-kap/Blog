const Blog = require('./../models/blog')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')

//read
 
exports.getAllBlog = catchAsync(async(req,res,next)=>{
  let AllBlog= await Blog.find();
  res.status(200).render('overview',{
    data:AllBlog,
  })
  next()
})

exports.getOneBlog = catchAsync(async(req,res,next)=>{
  let oneBlog= await Blog.findById(req.params.id);
    if (!oneBlog) {
    return next(new AppError('There is no blog with this ID🤣.', 404));
  }
  res.status(200).render('oneBlog',{
    data:oneBlog,
  })
  next()
})

//create
exports.Blog = async(req,res,next)=>{
  res.status(200).render('blog')
  next()
}

exports.createBlog = catchAsync(async(req,res,next)=>{
  let crtBlog = await Blog.create({
    title:req.body.title,
    content:req.body.content,
    name:req.body.name
  });
  res.status(200).json({
    status:"success",
    data:crtBlog,
  })
  next()
})

//update
exports.updatePage = catchAsync(async(req,res,next)=>{
    let updtBlog = await Blog.findById(req.params.id);
    res.status(200).render('update',{
    status:"success",
    data:updtBlog,
    })
    next()
})

exports.updtBlog = catchAsync(async(req,res,next)=>{
    let updtedBlog = await Blog.findByIdAndUpdate(req.params.id,{
      name:req.body.name,
      title:req.body.title,
      content:req.body.content
    },{new:true,runValidators:true});

   res.status(200).send({
    status:"success",
    data:updtedBlog,
    })
    next()
})


// delete
exports.deleteBlog = catchAsync(async(req,res,next)=>{
    let dltBlog= await Blog.findByIdAndDelete(req.params.id);
    res.status(200).render('delete',{
        data:dltBlog,
    })
    next()
})

//about
exports.getAbout = async(req,res,next)=>{
  res.render('about')
  next()
}

//contact
exports.getContact = async(req,res,next)=>{
  res.render('contact')
  next()
}