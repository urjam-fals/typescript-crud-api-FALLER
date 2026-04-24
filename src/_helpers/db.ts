import config from '../../config.json';
import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

export interface Database {
    User: any;
}

export const db: Database = {} as Database;

export async function initialize(): Promise<void> {
    const { host, port, user, password, database } = config.database;

    try {
        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        await connection.end();
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);

        throw new Error(
            `Could not connect to MySQL at ${host}:${port} as "${user}". ` +
            `Make sure the MySQL server is running and that config.json has the right credentials. ` +
            `Original error: ${message}`
        );
    }

    const sequelize = new Sequelize(database, user, password, {
        dialect: 'mysql',
        host,
        port
    });

    const { default: userModel } = await import('../_users/user.model');
    db.User = userModel(sequelize);

    await sequelize.sync({ alter: true });

    console.log('Database initialized and models synced');
}
