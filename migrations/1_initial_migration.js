const TreasureGuardian = artifacts.require("TreasureGuardian");
const ForgeMaster = artifacts.require("ForgeMaster");

module.exports = function (deployer) {
  deployer.deploy(TreasureGuardian);
  deployer.deploy(ForgeMaster);
};
