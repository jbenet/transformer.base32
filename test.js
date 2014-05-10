#!/usr/bin/env node
var transformer = require('dat-transformer');
var type = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.type(type);
