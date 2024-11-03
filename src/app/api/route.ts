export async function POST(request: Request) {
    try {
      const text = await request.name()
      // 웹훅 페이로드 처리
    } catch (error) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 200,
      })
    }
   
    return new Response(text, {
      status: 200,
    })
  }