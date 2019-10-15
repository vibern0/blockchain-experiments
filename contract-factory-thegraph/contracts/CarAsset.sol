pragma solidity ^0.5.10;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";


contract CarAsset is ERC20, ERC20Detailed, Ownable {
    string public brand;
    string public model;
    constructor(string memory _brand, string memory _model)
        public
        ERC20Detailed(_brand, _model, 18)
    {
        brand = _brand;
        model = _model;
    }

    function setOwner(address _owner) public {
        _transferOwnership(_owner);
    }

    function setBrand(string memory _brand) public {
        brand = _brand;
    }

    function setModel(string memory _model) public {
        model = _model;
    }
}