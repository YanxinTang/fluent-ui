const path = require('path');
const gulp = require('gulp');
const fs = require('fs');
const sass = require('gulp-sass');

const { readdirSync } = fs;
const { rmdir } = fs.promises;
const { series, parallel, dest } = gulp;

sass.compiler = require('node-sass');

const cwd = process.env.INIT_CWD;
const dist = path.resolve(cwd, 'dist');
const themesPath = path.resolve(cwd, 'src', 'themes');

function directories(p) {
  const entries = readdirSync(p, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

function createCleanThemeTask(theme) {
  const distPath = path.resolve(dist, theme);
  return async function cleanTheme() {
    await rmdir(distPath, {
      recursive: true,
    });
  };
}

function createCompileThemeStyleTask(theme) {
  const distPath = path.resolve(dist, theme);
  const themePath = path.resolve(themesPath, theme);
  return function compileThemeStyle() {
    return gulp.src('*.scss', { cwd: themePath }).pipe(sass().on('error', sass.logError)).pipe(dest(distPath));
  };
}

function createCopyThemeFontTask(theme) {
  const distPath = path.resolve(dist, theme, 'font');
  const themePath = path.resolve(themesPath, theme);
  return async function copyThemeFont() {
    await gulp.src(['font/**/*'], { cwd: themePath }).pipe(gulp.dest(distPath));
  };
}

function buildTheme(theme) {
  return series(createCleanThemeTask(theme), createCompileThemeStyleTask(theme), createCopyThemeFontTask(theme));
}

exports.default = parallel(...directories(themesPath).map((theme) => buildTheme(theme)));
