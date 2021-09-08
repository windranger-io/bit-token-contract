// Start - Support Mocha level debugging
import "hardhat"
import "@nomiclabs/hardhat-ethers";
// End - Support Mocha level debugging

import { expect } from "chai";
import { ethers } from "hardhat";

describe("BitDAO", async function () {
    it("Name should be BitDAO", async function (){
        const adminAccount = await signer()
        const BitDAO = await ethers.getContractFactory("BitDAO");
        const dao = await BitDAO.deploy(adminAccount);
        await dao.deployed();

        expect(await dao.name()).to.equal('BitDAO')
    })

    it("Zero votes for the admin", async function () {
        const adminAccount = await signer()
        const BitDAO = await ethers.getContractFactory("BitDAO");
        const dao = await BitDAO.deploy(adminAccount);
        await dao.deployed();


        expect(await dao.getCurrentVotes(adminAccount)).to.equal(0)
    });
});

async function signer(){
    const signers = await ethers.getSigners()
    expect(   signers.length).is.greaterThan(1)
    return signers[0].address
}
