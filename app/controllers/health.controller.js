exports.health_check = (req, res) => {
    try {
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now()
        };
        res.json(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
};