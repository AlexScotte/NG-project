// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

import "./Forge/ForgeMaster.sol";
import "./Forge/IronForgeFactory.sol";

contract TreasureGuardian is Ownable, ERC1155Holder {
    ForgeMaster public forgeMaster;
    IronForgeFactory public factory;

    constructor() {
        factory = new IronForgeFactory();
        address collectionAddress = factory.forgeCollection(
            "Node Guardians genesis collection"
        );
        forgeMaster = ForgeMaster(collectionAddress);
    }
}
