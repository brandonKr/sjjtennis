import { getConnection, query } from "../db";

export async function POST(request: Request) {
  const connection = await getConnection();
  const text = await request.text();
  const sql = "SELECT * from tb_reserve_Data";
  const result = await query(connection, sql);
  connection.release();
  return new Response(JSON.stringify(result));
}