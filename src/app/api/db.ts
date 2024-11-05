import { PoolConnection } from "mysql2";

const mysql = require("mysql2/promise");
const config = {
  host: 'localhost',
  user: 'root',
  password: '1234q',
  database: 'ssjang',
  port: 3106,
};
const pool = mysql.createPool(config);

export async function getConnection(): Promise<PoolConnection> {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    throw error;
  }
}

export async function query(connection: PoolConnection, sql: string) {
  try {
    const results = await connection.query(sql);
    return results;
  } catch (error) {
    throw error;
  }
}