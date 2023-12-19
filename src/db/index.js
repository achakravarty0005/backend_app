import Config from '../config';
import { Sequelize } from 'sequelize';

let postgresDb;

export default () => {
  const appEnv = Config.getEnv();
  const pgConfig = Config.getDatabaseConfig();

  if (!postgresDb) {
    postgresDb = new Sequelize(pgConfig.database, pgConfig.username, pgConfig.password, pgConfig);

    postgresDb
      .authenticate()
      .then(() => {
        console.log(`Connection to postgres has been established successfully for env: ${appEnv}.`);
      })
      .catch((error) => {
        console.log(`Unable to connect to the postgres database: ${error}`);
      });
  }
  return postgresDb;
};
