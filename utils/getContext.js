const { chalk, std } = require('wu-utils');
const enquirer = require('enquirer');

/*
* @param {Object} ctx
* @return {Object}
* */
function getContext(ctx) {
  let context = {
    utils: {
      std,
    },
    packages: {
      chalk,
      enquirer,
    },
  };
  if (typeof ctx === 'object') {
    if (ctx.utils && typeof ctx.utils === 'object') {
      context.utils = {
        ...ctx.utils,
        ...context.utils,
      };
      delete ctx.utils;
    }
    if (ctx.packages && typeof ctx.packages === 'object') {
      context.packages = {
        ...ctx.packages,
        ...context.packages,
      };
      delete ctx.packages;
    }
    context = {
      ...ctx,
      ...context,
    };
  }
  return context;
}

module.exports = getContext;