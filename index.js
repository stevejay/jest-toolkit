'use strict';

exports.sync = function(fn) {
  return fn.then(res => () => res).catch(err => () => {
    throw err;
  });
}
