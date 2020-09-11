//导入任务
let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let babel = require('gulp-babel');
let sass = require('gulp-sass');
//优化js任务
function fnJS(){
	return gulp.src('./src/js/*.js')
		.pipe(babel({
		    presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest('./dist/js'));
}
//优化css
function fnCSS(){
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(cssnano())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest('./dist/css'));
}
//优化图片
function fnImg(){
	return gulp.src('./src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
}
//复制index.html
function fnCopyIndex(){
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist/'));
}
//复制子页
function fnCopyPages(){
	return gulp.src('./src/pages/*.html')
		.pipe(gulp.dest('./dist/pages'));
}
//监听任务
function fnWatch(){
	gulp.watch('./src/js/*.js',fnJS);
	gulp.watch('./src/sass/*.scss',fnCSS);
	gulp.watch('./src/index.html',fnCopyIndex);
	gulp.watch('./src/pages/*.html',fnCopyPages);
}
//导出任务
exports.js = fnJS;
exports.css = fnCSS;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.default = fnWatch;
exports.copyPages = fnCopyPages;