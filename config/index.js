var configValues = require('./config');

module.exports = {
    getDbConnStr: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds123513.mlab.com:23513/todo'
    }
}