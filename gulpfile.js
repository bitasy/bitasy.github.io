const { series, parallel, watch, src, dest } = require('gulp');
var server  = require('browser-sync').create();
var sass         = require('gulp-sass');
var sassVarsToJs = require('gulp-sass-vars-to-js');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uncss        = require('gulp-uncss');

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './'
        }
    });
    done();
}


function compile(){
    return src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe( dest('src/css/') );
}

function sassvars() {
    return src(['src/scss/_customVariables.scss'])
        .pipe( sassVarsToJs() )
        .pipe( rename("vars.js") )
        .pipe( dest("src/js") )
}

function safevars(done){
    setTimeout(done, 1000);
    return sassvars();
}

function js(){
    return src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe( dest("src/js") );
}

watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], series(compile, sassvars, reload));
watch("*.html", reload);
watch("src/js/*,js", reload);

watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], series(compile, sassvars, reload));

const dev = series(compile, safevars, js, serve, reload);
exports.default = dev;
