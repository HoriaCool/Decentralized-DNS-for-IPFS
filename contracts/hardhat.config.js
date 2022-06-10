require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.0",
	networks: {
		localnode: {
			url: "http://127.0.0.1:8545/",
			network_id: "*",
		},
		ganache: {
			url: "http://172.26.32.1:7545/",
			network_id: "5777",
		}
	}
};
