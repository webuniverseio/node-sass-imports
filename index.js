module.exports = function (file) {
    var sass = require('node-sass');

    return sass.renderSync({
        file : file,
    }).stats.includedFiles;
};
