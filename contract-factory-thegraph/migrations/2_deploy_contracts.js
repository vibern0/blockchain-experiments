const CarShop = artifacts.require("CarShop");
const CarAsset = artifacts.require("CarAsset");
const faker = require('faker');

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(CarShop);
    const carShop = await CarShop.deployed();
    for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 1; b++) {
            var randomName = faker.name.firstName();
            var randomLorem = faker.lorem.word();
            const deployed = await carShop.createChildContract(randomName, randomLorem);
            const carAsset = await CarAsset.at(deployed.logs[0].args.contractAddress);
            await carAsset.setOwner(accounts[1]);
        }
        console.log(`Batch ${a+1}/10 finished!`);
    }
};
