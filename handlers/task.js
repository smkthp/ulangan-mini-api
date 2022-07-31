const prisma = require('../db');

module.exports = {
    async index(req) {
        const tasks = await prisma.task.findMany();

        return tasks;
    },
    async show(req) {},
    async store(req) {},
    async update(req) {},
    async destroy(req) {},
};
