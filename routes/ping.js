/** @param {import('fastify').FastifyInstance} fastify  */
module.exports = async function (fastify) {
    fastify.get('/ping', req => {
        return 'Pong!';
    });
};
