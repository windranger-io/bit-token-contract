// Start - Support direct Mocha run & debug
import 'hardhat'
import '@nomiclabs/hardhat-ethers'
// End - Support direct Mocha run & debug

import {expect} from 'chai'
import {ethers} from 'hardhat'
import {before} from 'mocha'
import {BitDAO} from '../typechain'

describe('BitDAO token contract', async () => {
  before(async () => {
    adminAccount = await signer()
    dao = await bitDao()
  })

  it('name is BitDAO', async () => {
    expect(await dao.name()).to.equal('BitDAO')
  })

  it('symbol is BIT', async () => {
    expect(await dao.symbol()).to.equal('BIT')
  })

  it('Zero votes for the admin', async () => {
    expect(await dao.getCurrentVotes(adminAccount)).to.equal(0)
  })

  let adminAccount: string
  let dao: BitDAO
})

async function bitDao(): Promise<BitDAO> {
  const adminAccount = await signer()
  const factory = await ethers.getContractFactory('BitDAO')
  const dao = <BitDAO>await factory.deploy(adminAccount)
  return dao.deployed()
}

async function signer(): Promise<string> {
  const signers = await ethers.getSigners()
  expect(signers.length).is.greaterThan(1)
  return signers[0].address
}
