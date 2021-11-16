async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	const Slipperyswap = await ethers.getContractFactory("Slipperyswap");
	const slipperyswap = await Slipperyswap.deploy();

	console.log("Contract address:", slipperyswap.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
