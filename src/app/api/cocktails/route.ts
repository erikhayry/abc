// src/app/api/cocktails/route.ts
import { NextResponse } from 'next/server';
import cocktails from './all.json' assert { type: 'json' };

export async function GET() {
  return NextResponse.json(cocktails);
}
