module.exports = app => {
    const commentary = require("../controllers/commentary.controller.js");
  
    var router = require("express").Router();
  
    // Criar produto
    router.post("/", commentary.create);
  
    // Listar todos os produtos
    router.get("/", commentary.findAll);
  
    // Listar produto por id
    router.get("/:id", commentary.findOne);
  
    // Atualizar produto
    router.put("/:id", commentary.update);
  
    // Deletar produto
    router.delete("/:id", commentary.delete);
  
    app.use('/api/comentario', router);
  };