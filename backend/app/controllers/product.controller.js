const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

// Criar e salvar um produto
exports.create = (req, res) => {
  // Validar requisição
  if (!req.body.description) {
    res.status(400).send({
      message: "Campos não podem ser vazios!"
    });
    return;
  }

  // Criar um produto
  const product = {
    id: req.body.id,
    categoria: req.body.categoria,
    titulo: strireq.body.titulo,
    descricao_oferta: req.body.descricao_oferta,
    valor: req.body.valor,
    anunciante: req.body.anunciante,
    destaque: req.body.destaque,

  };

  // Salvar produto no banco
  Product.create(produto)
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
  if (req.query.descricao_oferta)
    Object.assign(where, { descricao_oferta: { [Op.like]: `%${req.query.descricao_oferta}%` } });
  if (req.query.categoria)
    Object.assign(where, { categoria: { [Op.like]: `%${req.query.categoria}%` } });
  if (req.query.titulo)
    Object.assign(where, { titulo: { [Op.like]: `%${req.query.titulo}%` } });
  if (req.query.anunciante)
    Object.assign(where, { anunciante: { [Op.like]: `%${req.query.anunciante}%` } });
  if (req.query.valor)
    Object.assign(where, { valor: req.query.valor });
  if (req.query.destaque)
    Object.assign(where, { destaque: req.query.destaque });

  return where;
}

// Listar todos os produtos do banco.
exports.findAll = (req, res) => {
  var condition = criaParametroFiltroQuery(req);
  Product.findAll({ where: condition })
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

// Encontrar um produto por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Algum erro ocorreu ao recuperar produto de id=" + id
      });
    });
};

// Atualizar produto por id
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produto foi atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não foi possivel atualizar produto de id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel atualizar produto de id=" + id
      });
    });
};

//deletar produtos
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produto foi deletado com sucesso!"
        });
      } else {
        res.send({
          message: "Não foi possivel deletar produto de id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel deletar produto de id=" + id
      });
    });
};
