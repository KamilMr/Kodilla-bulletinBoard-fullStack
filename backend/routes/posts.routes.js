const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({ status: 'published' })
      .select('author created title photo')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});
router.get('/posts/user', async (req, res) => {
  try {
    const result = await Post
      .find({ status: 'draft' })
      .select('author created title photo')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/posts/:id', async (req, res) => {
  try {
    const { title, description, publication, lastEdit, author, status, price, phone, photo, localization } = req.body;
    const result = await Post.findById(req.params.id);
    if (result) {
      result.title = title;
      result.description = description;
      result.publication = publication;
      result.lastEdit = lastEdit;
      result.author = author;
      result.status = status;
      result.price = price;
      result.phone = phone;
      result.photo = photo;
      result.localization = localization;
      await result.save();
      res.json({ message: result });
    } else res.status(404).json({ post: 'Not found' });
  }
  catch (err) {
    res.status(500).json(err.response);
  }
});

router.post('/posts/add', async (req, res) => {
  try {
    const { title, description, publication, lastEdit, email, status, price, phone, photo, localization } = req.body;
    const newPost = new Post({ title: title, author: email, created: publication, updated: lastEdit, status: status, text: description, photo: photo, price: price, phone: phone, localization: localization });
    console.log(req);
    await newPost.save();

    if (!newPost) res.status(404).json({ post: 'Not found' });
    else res.json(newPost);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/posts/delete', async (req, res) => {
  const { id } = req.body;
  try {
    const post = await Post
      .findById(id);
    console.log(post);
    if (post) {
      await Post.deleteOne({ _id: id });
      res.json({ message: 'Deleted' });
    } else res.status(404).json({ message: 'Not found...' });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
