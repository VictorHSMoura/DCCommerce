module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Criar produto
    router.post("/", product.create);
  
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