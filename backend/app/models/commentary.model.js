module.exports = (sequelize, Sequelize, db) => {
  const Commentary = sequelize.define("Commentary", {
    texto: {
      type: Sequelize.STRING
    },
    nota: {
      type: Sequelize.FLOAT
    },
    avaliador: {
      type: Sequelize.STRING
    }
  });

  db.product.hasMany(Commentary)


  return Commentary;
};
