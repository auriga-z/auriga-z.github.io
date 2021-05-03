import gulp from 'gulp';
import paths from '../mconfig.json';
import styles from './styles.js';
import scripts from './scripts.js';
import views from './views.js';
import svgs from './svgs.js';
import { server } from './serve.js';

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
    gulp.watch(paths.views.src, gulp.series(views, reload));
    gulp.watch(paths.svgs.src, gulp.series(svgs, reload));
}

function reload(done) {
    server.reload();
    done();
}

export default watch;
