module.exports = (sequelize, Sequelize, db) => {
  const Order = sequelize.define("order", {
    comprador: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    qtd: {
      type: Sequelize.INTEGER
    },
  });

  db.product.hasMany(Order);
  Order.belongsTo(db.product);

  return Order;
};