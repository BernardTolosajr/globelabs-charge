var nock = require('nock');

module.exports.stubCharging = function(token) {
  return {
    success: function() {
      var url = '/payment/v1/transactions/amount?access_token='+ token;
      var params = 'amount=1&description=hello&endUserId=09151111111&transactionOperationStatus=Charged&referenceCode=001';

      var scope = nock('https://devapi.globelabs.com.ph')
        .post(url, params)
        .reply(201, {
          amountTransaction: {
          endUserId: '9175595283',
          paymentAmount: {
            chargingInformation: {
              amount: 1,
              currency: 'php',
            }
          },
          totalAmountCharged: 1
          },
          referenceCode: '53151000023',
          serverReferenceCode: '528f5369b390e16a62000006'
      });
    },

    failure: function() {
      var url = '/payment/v1/transactions/amount?access_token='+ token;
      var params = 'amount=1&description=hello&endUserId=09151111111&transactionOperationStatus=Charged&referenceCode=001';

      var scope = nock('https://devapi.globelabs.com.ph')
        .post(url, params)
        .reply(422, {errors: 'some error occured'});
    }
  }
};
