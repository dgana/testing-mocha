const chai = require('chai')
const expect = chai.expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

const controller = require('../controller/index')

let random_numbers = [6, 29, 18, 2, 72, 19, 20, 10, 37]
let pineapple_arr = ['p', 'i', 'n', 'e', 'a', 'p', 'p', 'l', 'e']

describe('Datatype testing', function () {
  it('Linear search is a function', function () {
    expect(controller.linearSearch).to.be.a('function')
  })
  it('Global search is a function', function () {
    expect(controller.globalSearch).to.be.a('function')
  })
  it('Linear search returns a number', function () {
    expect(controller.linearSearch(10, random_numbers)).to.be.a('number')
  })
  it('Global search returns an array', function () {
    expect(controller.globalSearch('p', pineapple_arr)).to.be.a('array')
  })
})

describe('Result testing', function () {
  it('Expect linear search to equal 5', function () {
    expect(controller.linearSearch(19, random_numbers)).to.equal(5)
  })
  it('Expect linear search to equal 8', function () {
    expect(controller.linearSearch(37, random_numbers)).to.equal(8)
  })
  it('Expect linear search to equal 1', function () {
    expect(controller.linearSearch(29, random_numbers)).to.equal(1)
  })
  it('Expect global search to equal to [0, 5, 6]', function () {
    expect(controller.globalSearch('p', pineapple_arr)).to.be.equalTo([0, 5, 6])
  })
  it('Expect global search to equal to [3, 8]', function () {
    expect(controller.globalSearch('e', pineapple_arr)).to.be.equalTo([3, 8])
  })
  it('Expect global search to equal to [7]', function () {
    expect(controller.globalSearch('l', pineapple_arr)).to.be.equalTo([7])
  })
})

describe('Length result testing', function () {
  it('Expect global search to have length of 3', function () {
    expect(controller.globalSearch('p', pineapple_arr)).to.be.ofSize(3)
  })
  it('Expect global search to have length of 2', function () {
    expect(controller.globalSearch('e', pineapple_arr)).to.be.ofSize(2)
  })
  it('Expect global search to have length of 1', function () {
    expect(controller.globalSearch('l', pineapple_arr)).to.be.ofSize(1)
  })
  it('Expect global search not to have length of 6', function () {
    expect(controller.globalSearch('p', pineapple_arr)).not.to.be.ofSize(6)
  })
  it('Expect global search not to have length of 9', function () {
    expect(controller.globalSearch('e', pineapple_arr)).not.to.be.ofSize(9)
  })
})

describe('Result greater or lower than', function () {
  it('Expect linear search to be greater than 4', function () {
    expect(controller.linearSearch(19, random_numbers)).gt(4)
  })
  it('Expect linear search to be greater than 0', function () {
    expect(controller.linearSearch(29, random_numbers)).gt(0)
  })
  it('Expect linear search to be less than 7', function () {
    expect(controller.linearSearch(72, random_numbers)).lt(7)
  })
  it('Expect linear search to be less than 8', function () {
    expect(controller.linearSearch(18, random_numbers)).lt(8)
  })
  it('Expect global search to have members of [0, 5, 6]', function () {
    expect(controller.globalSearch('p', pineapple_arr)).have.members([0, 5, 6])
  })
  it('Expect global search to have members of [1]', function () {
    expect(controller.globalSearch('i', pineapple_arr)).have.members([1])
  })
})
