import { NextRequest, NextResponse } from "next/server";
import { object } from "zod";
import Prisma from "@/prisma/PrismaClient";
import { IssueCreationObj } from "@/app/ValidationSchema";


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