var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://test:123456@ds050879.mlab.com:50879/club'
  },

  test: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/helloblog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'hello-nodeblog'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/helloblog-production'
  }
};

module.exports = config[env];
