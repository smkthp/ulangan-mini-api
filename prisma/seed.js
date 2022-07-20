const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i < 10; i++) {
        await prisma.task.create({
            data: {
                name: faker.lorem.sentence(),
                desc: faker.lorem.paragraph(),

                questions: {
                    create: [...Array(10)].map(() => ({
                        body: faker.lorem.sentence(),
                        answers: {
                            create: [...Array(4)].map(() => ({
                                body: faker.lorem.word(),
                                correct: faker.helpers.maybe(() => true, { probability: 0.25 }) || false,
                            })),
                        },
                    })),
                },
            },
        });
    }
}

main()
    .catch(e => console.log(e))
    .finally(() => prisma.$disconnect());
