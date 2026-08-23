/**
 * Vercel Serverless Function Entry Point
 * Routes incoming Vercel /api/* HTTP requests to Express app.
 */

const app = require('../server/index');

module.exports = app;
