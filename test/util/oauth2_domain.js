var chai = require('chai')
var expect = chai.expect

describe('oauth2 domain', function() {
  describe('email restriction not specified', function() {
    var oauth2 = require('../../lib/units/auth/oauth2')()
    it('should validate any email', function () {
      expect(oauth2.isEmailAllowed('test@test.test')).to.be.true
      expect(oauth2.isEmailAllowed('test@test.invalid')).to.be.true
    })
  })

  describe('email restriction specified', function() {
    var oauth2 = require('../../lib/units/auth/oauth2')({
      domain: 'company.test'
    })
    it('should not validate email outside allowed domain', function () {
      expect(oauth2.isEmailAllowed('test@test.test')).to.be.true
      expect(oauth2.isEmailAllowed('test@test.test')).to.be.true
    })
  })

})
