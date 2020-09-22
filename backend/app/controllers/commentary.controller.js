const db = require("../models");
const Commentary = db.commentary;
const Op = db.Sequelize.Op;

// Criar e salvar um comentario
exports.create = (req, res) => {
  // Validar requisição
  if (!req.body) {
    res.status(400).send({
      message: "Campos não podem ser vazios!"
    });
    return;
  }

  // Criar um comentario
  const commentary = {
    MainProductId: req.body.ProductId,
    texto: req.body.texto,
    nota: req.body.nota,
    avaliador: req.body.usuarioLogadoEmail,
    valor: req.body.valor,
    anunciante: req.body.anunciante,
    destaque: req.body.destaque,

  };

  // Salvar comentario no banco
  Commentary.create(commentary)
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
  if (req.query.ProductId)
    Object.assign(where, { MainProductId: req.query.ProductId });

  return where;
}

// Listar todos os comentarios do banco.
exports.findAll = (req, res) => {
  var condition = criaParametroFiltroQuery(req);
  Commentary.findAll({ where: condition })
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

// Encontrar um comentario por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Commentary.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Algum erro ocorreu ao recuperar comentario de id=" + id
      });
    });
};

// Atualizar comentario por id
exports.update = (req, res) => {
  const id = req.params.id;

  Commentary.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "comentario foi atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não foi possivel atualizar comentario de id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel atualizar comentario de id=" + id
      });
    });
};

//deletar comentarios
exports.delete = (req, res) => {
  const id = req.params.id;

  Commentary.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "comentario foi deletado com sucesso!"
        });
      } else {
        res.send({
          message: "Não foi possivel deletar comentario de id=" + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel deletar comentario de id=" + id
      });
    });
};
