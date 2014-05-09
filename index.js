var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'base32',
  'description': 'base32 encoding data into ascii.',
  'schema': 'string',
});
