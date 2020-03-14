module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Criar item
    router.post("/", item.create);
  
    // Listar todos os itens
    router.get("/", item.findAll);
  
    // Listar item por id
    router.get("/:id", item.findOne);
  
    // Atualizar item
    router.put("/:id", item.update);
  
    // Deletar item
    router.delete("/:id", item.delete);
  
    app.use('/api/item', router);
  };