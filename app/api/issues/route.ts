import { NextRequest, NextResponse } from "next/server";
import { object, z } from "zod";
import Prisma from "@/prisma/PrismaClient";


const IssueCreationObj=z.object({

    title : z.string(
        {
            required_error:"Title is Much required to have"
        }
    ).min(1).max(255),
    description : z.string().min(1)

})

export async function POST(req:NextRequest)
{
    const body = await req.json();
    const validation=IssueCreationObj.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status:400});

    const newIssue = await Prisma.issue.create({
        data:{
            title:body.title,
            description:body.description
        }
    })
    return NextResponse.json({Message : "Created issue :"+newIssue.title},{status:201});
}