'use strict';

if(!process.env.NODE_ENV) {
  require('dotenv').config()
}

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  cb();
};
