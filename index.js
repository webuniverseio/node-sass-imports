module.exports = function (file) {
    var sass = require('node-sass');

    // Default options to use for the sass compiler
    var options = {};

    // If a string is passed, assume it's a file
    if (typeof file == 'string') {
        options.file = file;
    } else {
        options = file;
    }

    // Return the imported files
    return sass.renderSync(options).stats.includedFiles;
};
