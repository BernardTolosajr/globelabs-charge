var needle = require('needle');

module.exports = function Charge(token) {
  var host = 'https://devapi.globelabs.com.ph';
  var url = host + '/payment/v1/transactions/amount?access_token=' + token;

  return {
    send: function(options, done) {
      var params = {
        amount: options.amount,
        description: options.description,
        endUserId: options.subscriberMobile,
        transactionOperationStatus: 'Charged',
        referenceCode: options.referenceCode
      };

      needle.post(url, params, function(err, response) {
        if (err) { return done(err, null); }
        if (response.statusCode !== 200) { return done(response.body, null); }
        done(null, response.body);
      });
    }
  }
};
