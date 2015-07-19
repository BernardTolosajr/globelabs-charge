# globelabs-charging 
[![Build Status](https://travis-ci.org/BernardTolosajr/globelabs-charge.svg?branch=master)](https://travis-ci.org/BernardTolosajr/globelabs-charge)

Simple wrapper for globelabs charge api

## Installation
```npm install globelabs-charging```

## Setup

```javascript
var Charge = require('globelabs-charging');
```

## Usage

```javascript
var charge = Charge(token);

var options = {
  amount: '1.00',
  subscriberMobile: '09151111111',
  referenceCode: '001',
  description: 'hello'
};

charge.send(options, function(err, transaction) {
  //do things here
});
```

see: [globelabs-api](https://docs.google.com/document/d/1G86orfgsONz9ALLByRfW_wx-xzR9n5XhW2mnfvJX_Hg/pub?embedded=true) for charging docs
