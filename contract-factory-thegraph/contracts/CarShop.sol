pragma solidity ^0.5.10;
import "./CarAsset.sol";


contract CarShop {
    address[] carAssets;

    event CreateChildContract(string brand, string model, address contractAddress);

    function createChildContract(string memory brand, string memory model) public {
        // insert check if the sent ether is enough to cover the car asset ...
        address newCarAsset = address(new CarAsset(brand, model));
        carAssets.push(newCarAsset);
        emit CreateChildContract(brand, model, newCarAsset);
    }

    function getDeployedChildContracts() public view returns (address[] memory) {
        return carAssets;
    }
}