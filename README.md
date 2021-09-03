# BitDAO Token Contract
The BitDAO contract as deployed on Mainnet

The aggregated solidity source file was lifted from the BitDAO contract address `0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5` on [Etherscan](https://etherscan.io/address/0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5#code)

## Development Process
### Git
Trunk based approach with a single main branch and ephemeral side branches.
https://trunkbaseddevelopment.com/

Create yourself a user fork off the main.
For every changeset create a branch off your fork.
When the changeset is complete, create a pull request to merge the changeset to main.
After the changeset is merged, updated your fork from the upstream (main)

Branch protection can be used to enforce this behaviour for public repo's or private repo's when owned by Pro, Team and Enterprise organisations.

#### Git messages
Messages for commit and merge operations enter into the browsable log of project changes, providing a historical context for the project's development.

Consistency helps readers tremendously, please follow Conventional Commits
https://www.conventionalcommits.org/en/v1.0.0/

### Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
