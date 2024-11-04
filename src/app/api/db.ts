import { PoolConnection } from "mysql2";

const mysql = require("mysql2/promise");
const config = {
  host: 'localhost',
  user: 'ssjjang',
  password: 'rkflWkd091!',
  database: 'ssjang',
  port: 3106,
};
const pool = mysql.createPool(config);

export function getConnection(): Promise<PoolConnection> {
  return new Promise((resolve, reject) => {
    pool.getConnection((error:any, connection: PoolConnection) => {
      if (error) return reject(error);
      return resolve(connection);
    });
  });
}

export function query(connection: PoolConnection, sql: string) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error: any, results: any) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
}