const TreasureGuardian = artifacts.require("TreasureGuardian");
const ForgeMaster = artifacts.require("ForgeMaster");
const ForgeFactory = artifacts.require("ForgeFactory");

module.exports = function (deployer) {
  deployer.deploy(TreasureGuardian);
  // deployer.deploy(ForgeMaster);
  // deployer.deploy(ForgeFactory);
};
