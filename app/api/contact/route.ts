import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 验证必填字段
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: '请填写所有必填栏位' },
        { status: 400 }
      );
    }

    // 这里添加数据库存储逻辑
    // 例如使用 Prisma、MongoDB 等

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('处理联系表单提交时发生错误:', error);
    return NextResponse.json(
      { error: '提交失败，请稍后再次尝试' },
      { status: 500 }
    );
  }
}