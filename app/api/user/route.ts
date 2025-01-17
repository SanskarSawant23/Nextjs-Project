import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();



export function GET(){
    return NextResponse.json({
        msg:"hello from nextjs backend"
    })
}

export async function POST(req: NextRequest){
   const body = await req.json();
   //add the email and password to the database
   try{
    const user = await prisma.user.create({
        data:{
            email:body.username,
            password:body.password
        }
   })
   return NextResponse.json({
    msg:"entry to database done",
    body
   })

   }
   catch(error){
        NextResponse.json({
            message:"Error white signing up"
        }, {
            status:411
        })
   }
  
   return NextResponse.json({
    body
   })
}