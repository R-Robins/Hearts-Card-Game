'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'passed_cards',
      {
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'user_id'
          }
        },
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'games',
            key: 'game_id'
          }
        },
        card_id : {
          type: Sequelize.INTEGER,
          references: {
            model: 'cards',
            key: 'card_id'
          }
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('passed_cards');
  }
};
