const Blog = require('../model/Blog');

const createBlog = async (req, res) => {
    try {
        const newBlog = await new Blog(req.body)
        const saveBlog = await newBlog.save();
        res.status(200).json({ success: true, data: saveBlog });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const allBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, data: blogs });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const editBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: updatedBlog });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const deleteBlog = async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, data: deletedBlog });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
  


module.exports = { createBlog, allBlogs, editBlog, deleteBlog };