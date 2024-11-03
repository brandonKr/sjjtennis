import {NextResponse } from "next/server";
import { execSql } from "../../components/MyqSql/MysqlConn";
import { exec } from "child_process";

export async function POST(req: Request) {
  try {
    const text = await req.formData();

    console.log(text);

    const dataList = execSql("select * from tb_reserve_Data");

    console.log(dataList);
    

    return NextResponse.json(
      { 
        success: true, 
        message: '메세지가 성공적으로 전송되었습니다',
      },{status: 200}
    );
    // 웹훅 페이로드 처리
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: '메세지가 전송이실패 했습니다.',
        error 
      },{status: 200}
      );
    } 
}