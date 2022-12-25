const mongoose = require('mongoose');
const slugify = require('slugify')

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true,"title is required"]
    },
    name:{
        type:String,
        required: [true,"name is required"]
    },
    content:{
        type:[String],
        required: [true,"post is required, you have not write anytihng.."]
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    slug:String
})

blogSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true});
  next();
});

const Blog =mongoose.model('Blog',blogSchema);
module.exports = Blog;