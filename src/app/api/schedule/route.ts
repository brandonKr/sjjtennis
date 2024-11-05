import { getConnection, query } from "../db";
import executeQuery from '../MysqlConn' 

export async function insertSchedule(req: Request) {
  let sql: string = "SELECT * from TB_RESERVE_DATA";
  const result = await executeQuery(sql, '');
  return new Response(JSON.stringify([result]), { status: 200 });
}

export async function GET(request: Request) {
  const connection = await getConnection();
  const text = await request.text();
  const sql = "SELECT * from TB_RESERVE_DATA";

  const result = await query(connection, sql);
  connection.release();
  return new Response(JSON.stringify([result]), { status: 200 });
}

export async function POST(req: Request) {
  const connection = await getConnection();
  const data = await req.json();
  const sql = `INSERT INTO list (todo) VALUES ("${data.todo}")`;
  const result = (await query(connection, sql)) as any;

  const message = result?.insertId ? "success" : "error";
  const todoInfo = { id: result?.insertId, todo: data.todo };
  return new Response(JSON.stringify({ message, todoInfo }));
}

export async function DELETE(req: Request) {
  const connection = await getConnection();
  const data = await req.json();
  const sql = `DELETE FROM list WHERE id = ("${data.id}")`;
  const result = (await query(connection, sql)) as any;

  const message = result?.affectedRows ? "success" : "error";
  const todoInfo = { id: result?.id };
  return new Response(JSON.stringify({ message, todoInfo }));
}

export async function PUT(req: Request) {
  const connection = await getConnection();
  const data = await req.json();
  const sql = `
    UPDATE list
    SET todo = "${data.todo}"
    WHERE id = ${data.id};
  `;
  const result = (await query(connection, sql)) as any;

  const message = result?.affectedRows ? "success" : "error";
  const todoInfo = { id: data.id, todo: data.todo };
  return new Response(JSON.stringify({ message, todoInfo }));
}