
const TreasureGuardian = artifacts.require("TreasureGuardian");
const ForgeMaster = artifacts.require("ForgeMaster");

module.exports = async (deployer, network) => {

    var accounts = await web3.eth.getAccounts();
    var owner = accounts[0];
    var a1 = accounts[1];
    var a2 = accounts[2];


    const treasureGuardianInstance = await TreasureGuardian.deployed();
    // await treasureGuardianInstance.CreateStuff();

    var fmaster = await ForgeMaster.at(await treasureGuardianInstance.forgeMaster());

    console.log(owner);
    console.log(treasureGuardianInstance.address);
    console.log(fmaster.address);

    console.log(await treasureGuardianInstance.owner());
    console.log(await fmaster.owner());

    console.log((await fmaster.balanceOf(treasureGuardianInstance.address, 10)).toNumber());
    console.log((await fmaster.balanceOf(treasureGuardianInstance.address, 20)).toNumber());
};
