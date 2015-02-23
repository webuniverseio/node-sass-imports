# node-sass-imports

node-sass-imports is a simple script that finds what files are being imported by a given file in Sass. This is especially useful for watch tasks so you don't have to manually list what files to watch for changes. Instead, using this plugin, you pass in your main file to a watch task and all of your imports are watched automatically.

## Install & Usage

    npm install node-sass-imports

Using this plugin in a gulp watch task.
```javascript
gulp.task('watch', function () {
    var sassimports = require('node-sass-imports');

    gulp.watch(sassimports(scss_filename), ['scss_task']);
});
```

## Future
This project will of course need to have options in the future that may be necessary for sass imports, like using the indented syntax. I would also like to add some functionality that allows for the original list of files to be updated without having to restart the watch task. This project will also need to have some tests implemented for the different sass syntaxes and task runners.
