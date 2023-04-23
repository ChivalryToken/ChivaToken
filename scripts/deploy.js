async function main() {
  // Get the contract to deploy
  const ChivalryToken = await ethers.getContractFactory("ChivalryToken");
  console.log("Deploying ChivalryToken...");
  const chivalryToken = await ChivalryToken.deploy();

  console.log("ChivalryToken deployed to:", chivalryToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
