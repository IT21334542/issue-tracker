import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton=()=>
{
    return new PrismaClient;
}


declare global{
    var prisma : undefined | ReturnType<typeof PrismaClientSingleton>
}

const Prisma = globalThis.prisma ?? PrismaClientSingleton()


export default Prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = Prisma