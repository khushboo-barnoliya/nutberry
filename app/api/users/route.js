import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/database/db';

connectDB();

export async function POST(req) {
  const {formData} = await req.json();
  console.log(formData)
  return NextResponse.json({
    success: true,
    formData
  })
}