import gulp from "gulp";
import iconfont from "gulp-iconfont";
import imagemin from "gulp-imagemin";
import imageminOptipng from "imagemin-optipng";

const runTimestamp = Math.random(Date.now() / 1000);

// Gera Webfonts apartir dos arquivos svg.

gulp.task("iconfont", () => {
  return gulp
    .src("src/assets/**/*.svg")
    .pipe(
      iconfont({
        fontName: "icons",
        prepandUnicode: true,
        formats: ["ttf", "eot", "woff"],
        timestamp: runTimestamp,
      })
    )
    .pipe(gulp.dest("dist/fonts"));
});

// Comprime as imagens em formato png.

gulp.task("imagemin", () => {
  return gulp
    .src("src/assets/Images/*.png")
    .pipe(imagemin([imageminOptipng({ optimizationLevel: 5 })]))
    .pipe(gulp.dest("dist/images"));
});
