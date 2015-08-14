'use strict';

var haspTransform = require(__dirname + '/lib/hasp.js');
var through = require('through2');
var gulputil = require('gulp-util');
var log = gulputil.log;

var pluginName = 'gulp-hasp-css';

var haspTask = function () {
  log(pluginName, 'transforming css');
  
  return through.obj(haspTransform.bind({
    pluginName: pluginName
  }));
};

module.exports = haspTask;
