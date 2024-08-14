import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/database/db.js';
import userModel from '@/utils/Schema/userSchema'

connectDB();

export async function POST(req) {
  
  try {
    const { name, phone, message } = await req.json();
    const dateOfOrder = new Date().getTime()

    const checkUser = await userModel.findOne({name})
    if (checkUser) {
      return NextResponse.json({
        success: false,
        message: "User already exists!"
      })
    }
    
    const newUser = new userModel({name, phone, message, orderDate: dateOfOrder})
    await newUser.save();
    
    return NextResponse.json({
      success: true,
      message: "User saved successfully!"
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal Server Error!"
    })
  }
  
}