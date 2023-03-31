
const TreasureGuardian = artifacts.require("TreasureGuardian");
const ForgeMaster = artifacts.require("ForgeMaster");
const IronForgeFactory = artifacts.require("IronForgeFactory");

module.exports = async (deployer, network) => {

    var accounts = await web3.eth.getAccounts();
    var owner = accounts[0];
    var a1 = accounts[1];
    var a2 = accounts[2];


    const treasureGuardianInstance = await TreasureGuardian.deployed();
    //  const forgeMasterInstance = await ForgeMaster.deployed();
    //  const ironForgeFactory = await IronForgeFactory.deployed();

    var forgeMaster = await ForgeMaster.at(await treasureGuardianInstance.forgeMaster());
    var ironForgeFactory = await ForgeMaster.at(await treasureGuardianInstance.factory());

    console.log(owner);
    console.log(treasureGuardianInstance.address);
    console.log(forgeMaster.address);

    console.log(await treasureGuardianInstance.owner());
    console.log(await forgeMaster.owner());

    console.log((await forgeMaster.balanceOf(ironForgeFactory.address, 10)).toNumber());
    console.log((await forgeMaster.balanceOf(ironForgeFactory.address, 20)).toNumber());
};
