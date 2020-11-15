const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("minify", () =>
  gulp
    .src("src/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"], // es5检查机制
        plugins: ["@babel/transform-runtime"],
      })
    )
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("dist/"))
);
