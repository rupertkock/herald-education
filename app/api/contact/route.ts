import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 这里添加数据库存储逻辑
    // 例如使用 Prisma、MongoDB 等

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: '提交失败' },
      { status: 500 }
    );
  }
}