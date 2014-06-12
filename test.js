#!/usr/bin/env node
var ttest = require('transformer-test');
var type = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = ttest.type(type);
