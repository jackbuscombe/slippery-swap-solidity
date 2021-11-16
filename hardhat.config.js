require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.4",
	defaultNetwork: "kovan",
	networks: {
		hardhat: {
			forking: {
				url: "https://eth-mainnet.alchemyapi.io/v2/-YK9brn7abHdKVHU4QnMJ7xHOkc9Hjf5",
			},
		},
		kovan: {
			url: "https://eth-kovan.alchemyapi.io/v2/-La8AS0kpoNdeXxuJpSx49M0sQMdaAwE",
			accounts: [`0x5a3b880ccaadb64275918d4d9ea395d01ad34781436b473a37c28107f6167c18`],
		},
	},
};
