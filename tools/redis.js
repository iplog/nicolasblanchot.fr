var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

(function(inst) {
  exports.inst = inst;
})(redis);
