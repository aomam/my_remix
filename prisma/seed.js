const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function seed(){
    await Promise.all(
        getPosts().map( post => {
            const data = {...post}
            return prisma.post.create({data})
        })
    )
}
seed()

function getPosts() {
    return [
        {
            title: 'JavaScript Performance Tips',
            body: "bodydy dydydydy"
        },
        {
            title: 'Bootstrap',
            body: "bodydy dydydydy"
        }
    ]
}