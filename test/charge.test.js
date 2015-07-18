/* global describe, it, expect */
/* jshint expr: true */

var Charge = require('../lib/charge'),
    helper = require('./helper');

describe('Charge', function() {
  var token = '1234';

  beforeEach(function() {
    stub = helper.stubCharging(token);
    stub.success();
    stub.failure();
  });

  context('when success', function() {
    it('charge amount to subscriber', function(done) {
      var charge = Charge(token);

      var options = {
        amount: '1',
        subscriberMobile: '09151111111',
        referenceCode: '001',
        description: 'hello'
      };

      charge.send(options, function(err, transaction) {
        if (err) { console.log(err) };
        expect(transaction.referenceCode).to.be.equal('53151000023');
        done()
      });
    })
  });

  context('when failure', function() {
    it('do not charge subscriber', function(done) {
      var charge = Charge(token);

      var options = {
        amount: '1',
        subscriberMobile: '09151111111',
        referenceCode: '001',
        description: 'hello'
      };

      charge.send(options, function(err) {
        expect(err).to.be.not.empty;
        done()
      });
    })
  });
});
