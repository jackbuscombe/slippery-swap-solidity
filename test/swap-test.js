const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Slipperyswap Contract", function () {
	it("Should allow for a Swap to go through", async function () {
		const [owner] = await ethers.getSigners();

		const Slipperyswap = await ethers.getContractFactory("Slipperyswap");

		const hardhatSlipperyswap = await Slipperyswap.deploy();

		const ownerBalance = await hardhatSlipperyswap.balanceOf(owner.address);
		expect(await hardhatSlipperyswap.totalSupply()).to.equal(ownerBalance);
	});
});
