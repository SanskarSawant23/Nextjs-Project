import { NextRequest, NextResponse } from "next/server";



export function GET(){
    return NextResponse.json({
        msg:"hello from nextjs backend"
    })
}

export async function POST(req: NextRequest){
    const body =  req.json 
    console.log(req.headers.get("authorization"));
    return NextResponse.json({
        msg:"you have sent the data successfully"
    })

}