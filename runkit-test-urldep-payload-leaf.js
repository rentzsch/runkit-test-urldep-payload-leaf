const assert = require("assert");

const lodashIsNullPackage = require("lodash.isnull/package.json").version;

const runkitTestUrldepPayloadLeafBundledDep = require("runkit-test-urldep-payload-leaf-bundled-dep");

assert.deepStrictEqual(runkitTestUrldepPayloadLeafBundledDep, {
  name: "runkit-test-urldep-payload-leaf-bundled-dep",
  version: "1.0.0"
});

assert.deepStrictEqual(lodashIsNullPackage, "2.0.0");

module.exports = {
  name: "runkit-test-urldep-payload-leaf",
  version: "1.0.0",
  "runkit-test-urldep-payload-leaf-bundled-dep": runkitTestUrldepPayloadLeafBundledDep
};
