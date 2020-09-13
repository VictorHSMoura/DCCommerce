module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      description: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
  };