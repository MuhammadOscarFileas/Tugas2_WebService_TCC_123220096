import { Sequelize } from "sequelize";

const db = new Sequelize('api_catatan', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

// crud api = nama db

export default db;