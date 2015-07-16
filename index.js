'use strict';

module.exports = function hexColorRegex(config) {
  config = config || {};
  var regex = config.strict ? /^#([a-f0-9]{8}|[a-f0-9]{4})\b$/gi : /#([a-f0-9]{8}|[a-f0-9]{4})\b/gi
  return regex;
};
