import Sequelize from 'sequelize';
// Models import
import User from '../app/models/User';

import databaseConfig from '../config/database';

// models list to insert in database
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // eslint-disable-next-line prettier/prettier
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
