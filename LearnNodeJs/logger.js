// (function(exports, require, module, __filename, __dirname) {
console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
    console.log(message);
}

// module.exports.log = log;
// module.exports.exportedUrl = url;
// its better to export single method from a module
module.exports = log;
// })