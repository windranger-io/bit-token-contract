import { task } from "hardhat/config";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// task action function receives the Hardhat Runtime Environment as second argument
task(
    "blockNumber",
    "Prints the current block number",
    async (_, { ethers }) => {
      await ethers.provider.getBlockNumber().then((blockNumber) => {
        console.log("Current block number: " + blockNumber);
      });
    }
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// Last Solidity for 0.7.x stream is 0.7.6
export default {
  solidity: "0.7.6",
};
