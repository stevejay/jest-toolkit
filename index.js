"use strict";

exports.sync = function(promise) {
  return promise.then(res => () => res).catch(err => () => {
    throw err;
  });
};
