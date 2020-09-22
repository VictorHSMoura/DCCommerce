module.exports = (sequelize, Sequelize, db) => {
  const Order = sequelize.define("order", {
    comprador: {
      type: Sequelize.STRING
    },
    pedidoFinalizado: {
      type: Sequelize.BOOLEAN
    },
  });
  Order.associate = function(models) {
    Order.belongsToMany(models.Products, {through: 'OrderProducts', foreignKey: 'orderId', as: 'products'})
  };
  return Order;
};