// scripts/prepare_upgrade.js
// 使用多签钱包的升级方法
async function main() {
    const proxyAddress = '0x3F1e8477418Ca934ACE64E4524eD58b3aE374F2b';
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  