const assert = require("assert");

const lodashIsNullPackage = require("lodash.isnull/package.json").version;
assert.deepStrictEqual(lodashIsNullPackage, "2.0.0");

module.exports = {
  name: "runkit-test-urldep-payload-leaf",
  version: "1.0.0"
};
