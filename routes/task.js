const handler = require('../handlers/task');

/** @param {import('fastify').FastifyInstance} fastify */
module.exports = function (fastify, options, done) {
    fastify.get('/tasks', {
        handler: handler.index,
    });
    fastify.get('/tasks/:id', {
        handler: handler.show,
    });
    fastify.post('/tasks', {
        handler: handler.show,
    });
    fastify.put('/tasks', {
        handler: handler.update,
    });
    fastify.delete('/tasks', {
        handler: handler.destroy,
    });

    done();
};
