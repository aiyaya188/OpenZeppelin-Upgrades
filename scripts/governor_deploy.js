// scripts/governor_deploy.js
async function main() {
    const Governor = await ethers.getContractFactory("Governor");
    console.log("Deploying Governor...");
    const governor = await upgrades.deployProxy(Governor);
    console.log("Governor deployed to:", governor.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  