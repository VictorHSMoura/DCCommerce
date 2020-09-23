module.exports = app => {
  const product = require("../controllers/product.controller.js");

  var router = require("express").Router();

  var multer = require("multer");
  var upload = multer({ dest: 'images/' })
  

  // Criar produto
  router.post("/", upload.single('image'), product.create);

  // Listar todos os produtos
  router.get("/", product.findAll);

  // Listar produto por id
  router.get("/:id", product.findOne);

  // Atualizar produto
  router.put("/:id", product.update);

  // Deletar produto
  router.delete("/:id", product.delete);

  app.use('/api/produto', router);
};