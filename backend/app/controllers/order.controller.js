const { product } = require("../models");
const db = require("../models");
const Order = db.order;
const OrderProducts = db.orderProducts;
const Op = db.Sequelize.Op;

// Criar e salvar um pedido
exports.create = (req, res) => {
  // Validar requisição
  if (!req.body) {
    res.status(400).send({
      message: "Campos não podem ser vazios!"
    });
    return;
  }

  console.log(req.body.produtoQtdLista)
  // Criar um pedido
  
  const orderList = [];

  req.body.produtoQtdLista.forEach(productQtd => {
    const order = {
      comprador: req.body.compradorEmail,
      MainProductId: productQtd.produto.id,
      qtd: productQtd.qtd,
      status: "Finalizado"
    };

    orderList.push(order);

  });
  
  console.log(orderList);

  // Salvar pedido no banco
  Order.bulkCreate(orderList)
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

function criaParametroFiltroQuery(req) {
  let where = {};
  if (req.query.comprador)
    Object.assign(where, { comprador: { [Op.like]: `%${req.query.comprador}%` } });

  return where;
}

// Listar todos os pedidos do banco.
exports.findAll = (req, res) => {
  var condition = criaParametroFiltroQuery(req);
  Order.findAll({ where: condition, include: [
    { model: db.product }
] })
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

// Encontrar um pedido por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Algum erro ocorreu ao recuperar pedido de id=" + id
      });
    });
};

// Encontrar um produtos de um pedido
exports.findProducts = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
      data.getMainProducts().then(newData => {
        res.send(newData)
      });
      
    })
    .catch(err => {
      res.status(500).send({
        message: "Algum erro ocorreu ao recuperar pedido de id=" + id
      });
    });
};

// Atualizar pedido por id
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "pedido foi atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não foi possivel atualizar pedido de id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel atualizar pedido de id=" + id
      });
    });
};

//deletar pedidos
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "pedido foi deletado com sucesso!"
        });
      } else {
        res.send({
          message: "Não foi possivel deletar pedido de id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel deletar pedido de id=" + id
      });
    });
};