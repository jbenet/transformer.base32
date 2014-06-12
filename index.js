var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'base32',
  'description': 'base32 encoding data into ascii.',
  'schema': 'string',
});
