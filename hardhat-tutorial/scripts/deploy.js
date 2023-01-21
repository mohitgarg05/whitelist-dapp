const {ethers} = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");


  const deployeWhitelist = await whitelistContract.deploy(10);

  await deployeWhitelist.deployed();

  console.log("Whitelist Contract Address:", deployeWhitelist.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
