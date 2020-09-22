module.exports = (sequelize, Sequelize, db) => {
  const OrderProducts = sequelize.define("order_products", {
    quantity: {
      type: Sequelize.INTEGER
    }
  });

  db.product.belongsToMany(db.order, { through: OrderProducts })
  db.order.belongsToMany(db.product, { through: OrderProducts })
  
  return OrderProducts;
};

