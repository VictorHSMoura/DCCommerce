module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", item.create);
  
    // Retrieve all Tutorials
    router.get("/", item.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", item.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", item.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", item.delete);
  
    app.use('/api/item', router);
  };