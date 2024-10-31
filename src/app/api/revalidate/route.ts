import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { tags } = await request.json();
    if (!Array.isArray(tags)) {
      return NextResponse.json({ error: 'Tags must be an array' }, { status: 400 });
    }
    tags.forEach(tag => {
      revalidateTag(tag);
    });
    return NextResponse.json({ revalidated: true, tags , time : new Date() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revalidate tags' }, { status: 500 });
  }
}
