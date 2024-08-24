import { NextResponse } from "next/server";
import connectDB from '@/libs/db';
import userModel from '@/models/userSchema';



connectDB();
export async function GET(req, {params}){
  const {id} = params;
  await connectDB();
  const user = await userModel.findOne({_id: id});
  return NextResponse.json({user}, {status: 200})
} 