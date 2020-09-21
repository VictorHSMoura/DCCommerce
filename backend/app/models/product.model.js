module.exports = (sequelize, Sequelize) => {
  const MainProduct = sequelize.define("MainProduct", {
    id: {
      type: Sequelize.INTEGER
    },
    titulo: {
      type: Sequelize.STRING
    },
    anunciante: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    descricao_oferta: {
      type: Sequelize.STRING
    },
    destaque: {
      type: Sequelize.BOOLEAN
    },
    valor: {
      type: Sequelize.FLOAT
    },
  });

  return Item;
};
