const { Post } = require('../db');


const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error al obtener la lista de posts:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating post' });
  }
};


const updatePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Actualizar las propiedades del post según los datos en el cuerpo de la solicitud
    await post.update(req.body);

    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  getPosts,
  createPost,
  updatePost
};
