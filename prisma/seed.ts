import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    //create dummy
    const user1 = await prisma.users.upsert({
        where: { username: 'Mahardika' },
        update: {},
        create: {
          name: 'Mahardika',
          username : 'mahardika',
          email: 'mahardikawsp@gmail.com',
          password: 'mahardika',
          photo: 'photo.jpg'
        },
    });

    const article1 = await prisma.article.upsert({
        where: { title: 'Contoh Postingan Mahardika' },
        update: {},
        create: {
          title: 'Contoh Postingan Mahardika',
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags : "berita",
          published: false,
        },
    });

    const like1 = await prisma.like.create({
        data: {
            article_id: 1,
            user_id: 1,
          },
    })
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });