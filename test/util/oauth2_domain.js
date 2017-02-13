var chai = require('chai')
var expect = chai.expect

describe('oauth2', function() {
  var oauth2 = require('../../lib/units/auth/oauth2')({})
  it('should validate any email if restriction not specified', function() {
    expect(oauth2.isEmailAllowed('test@test.test')).to.be.true
  })

})
