const assert = require("assert");

const thisPackageVersion = require("./package.json").version;

const lodashIsNullPackageVersion = require("lodash.isnull/package.json").version;
assert.deepStrictEqual(lodashIsNullPackageVersion, "2.0.0");

module.exports = {
  name: "runkit-test-urldep-payload-leaf",
  version: thisPackageVersion,
  hasPretendFix: true
};

if (!module.parent) {
  console.log(JSON.stringify(module.exports, null, 2));
}
