module.exports = (sequelize, Sequelize) => {
  const MainProduct = sequelize.define("MainProduct", {
    titulo: {
      type: Sequelize.STRING
    },
    anunciante: {
      type: Sequelize.STRING
    },
    anunciante_email: {
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
    urlFoto: {
      type: Sequelize.STRING
    }
  });

  MainProduct.associate = function(models) {
    MainProduct.belongsToMany(models.Order, {through: 'OrderProducts', foreignKey: 'productId', as: 'orders'})
  };

  return MainProduct;
};
