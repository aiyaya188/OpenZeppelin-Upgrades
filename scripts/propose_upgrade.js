// scripts/propose_upgrade.js
const { defender } = require("hardhat");

async function main() {
  const proxyAddress = '0x535FfFeA897566784b2dd89afF6Bb5d1D7985D47';

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, BoxV2);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })