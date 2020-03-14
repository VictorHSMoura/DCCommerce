const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

// Criar e salvar um item
exports.create = (req, res) => {
    // Validar requisição
    if (!req.body.description) {
      res.status(400).send({
        message: "Campos não podem ser vazios!"
      });
      return;
    }
  
    // Criar um item
    const item = {
        description: req.body.description,
        active: req.body.active ? req.body.active : false
    };
  
    // Salvar item no banco
    Item.create(item)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao salvar."
        });
      });
  };

// Listar todos os itens do banco.
exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;
  
    Item.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao listar."
        });
      });
  };

// Encontrar um item por id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Item.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao recuperar item de id=" + id
        });
      });
  };

// Atualizar item por id
exports.update = (req, res) => {
    const id = req.params.id;
  
    Item.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item foi atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar item de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possivel atualizar item de id=" + id
        });
      });
  };
  
//deletar itens
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Item.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item foi deletado com sucesso!"
          });
        } else {
          res.send({
            message: "Não foi possivel deletar item de id=" + id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possivel deletar item de id=" + id
        });
      });
  };
