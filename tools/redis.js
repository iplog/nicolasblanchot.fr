var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

exports.conn = redis;
