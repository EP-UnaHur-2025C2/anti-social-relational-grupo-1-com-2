const { Post_image, Post } = require("../../db/models");

const obtenerPostsImage = async (req, res) => {
  try {
    const postsImage = await Post_image.findAll();
    res.json(postsImage);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts de imagen" });
  }
};

const obtenerPostImage = async (req, res) => {
  try {
    const { id } = req.params.id;
    const postImage = await Post_image.findByPk(id);
    if (!postImage) {
      return res.status(404).json({ error: "Post de imagen no encontrado" });
    }
    res.json(postImage);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el post de imagen" });
  }
};

const crearPostImage = async (req, res) => {
  try {
    const { url } = req.body;
    const postImage = await Post_image.create({ url });
    res.status(201).json(postImage);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post de imagen" });
  }
};

const actualizarPostImage = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { url } = req.body;
    const postImage = await Post_image.findByPk(id);
    if (!postImage) {
      return res.status(404).json({ error: "Post de imagen no encontrado" });
    }
    await postImage.update({ url });
    res.json(postImage);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el post de imagen" });
  }
};

const eliminarPostImage = async (req, res) => {
  try {
    const { id } = req.params.id;
    const postImage = await Post_image.findByPk(id);
    if (!postImage) {
      return res.status(404).json({ error: "Post de imagen no encontrado" });
    }
    await postImage.destroy();
    res.json({ message: "Post de imagen eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post de imagen" });
  }
};

const obtenerImagenesDelPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId, {
      include: Post_image,
    });
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.json(post.Post_images)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las imágenes del post" });
  }
};

const agregarImagenesAlPost = async (req, res) => {
  try {
    const {imagenIds = []} = req.body;
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    /*if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' })
        } HACER EN MIDDLEWARE*/
    await post.addPost_images(imagenIds);
    res.status(200).json({ message: "Imagen agregada al post correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar la imagen al post" });
  }
};

const quitarImagenesDelPost = async (req, res) => { 
  try {
    const {imagenIds = []} = req.body;
    const postId = req.params.id;
    const post = await Post.findByPk(postId)
    await post.removePost_images(imagenIds)
    res.status(200).json({ message: "Imagen/es eliminada/s del post correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la/s imagenes del post" });
  }
}

module.exports = {
  obtenerPostsImage,
  obtenerPostImage,
  crearPostImage,
  actualizarPostImage,
  eliminarPostImage,
  obtenerImagenesDelPost,
  agregarImagenesAlPost,
  quitarImagenesDelPost
};
