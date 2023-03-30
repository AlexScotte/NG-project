
const TreasureGuardian = artifacts.require("TreasureGuardian");
const ForgeMaster = artifacts.require("ForgeMaster");
const ForgeFactory = artifacts.require("ForgeFactory");

module.exports = async (deployer, network) => {

    var accounts = await web3.eth.getAccounts();
    var owner = accounts[0];
    var a1 = accounts[1];
    var a2 = accounts[2];


    const treasureGuardianInstance = await TreasureGuardian.deployed();
    // const forgeFactoryInstance = await ForgeFactory.deployed();
    //  const forgeMasterInstance = await ForgeMaster.deployed();

    var forgeMaster = await ForgeMaster.at(await treasureGuardianInstance.forgeMaster());

    console.log(owner);
    console.log(treasureGuardianInstance.address);
    console.log(forgeMaster.address);

    console.log(await treasureGuardianInstance.owner());
    console.log(await forgeMaster.owner());

    console.log((await forgeMaster.balanceOf(treasureGuardianInstance.address, 10)).toNumber());
    console.log((await forgeMaster.balanceOf(treasureGuardianInstance.address, 20)).toNumber());
};
