module.exports = app => {
    const order = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Criar pedido
    router.post("/", order.create);
  
    // Listar todos os pedido
    router.get("/", order.findAll);
  
    // Listar produto por id
    router.get("/produtos/:id", order.findProducts);

    // Listar pedido por id
    router.get("/:id", order.findOne);
  
    // Atualizar pedido
    router.put("/:id", order.update);
  
    // Deletar pedido
    router.delete("/:id", order.delete);
  
    app.use('/api/pedido', router);
  };