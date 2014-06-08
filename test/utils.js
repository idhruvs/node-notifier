var should = require('should')
  , assert = require('assert');

var _ = require('../lib/utils');

var originalPlatform = process.platform;
var originalVersion = _.getOSXVersion;

describe('utils', function(){

  beforeEach(function () {
    process.platform = "darwin";
  });

  after(function () {
    process.platform = originalPlatform;
    _.getOSXVersion = originalVersion;
  });

  it('should support mac 10.8', function (done) {
    _.getOSXVersion = function (cb) {
      cb(null, "10.8", "");
    };


    _.isMacOSX(function (error, msg) {
      error.should.be.false;
      done();
    });
  });

  it('should support not mac 10.7', function (done) {
    _.getOSXVersion = function (cb) {
      cb(null, "10.7", "");
    };

    _.isMacOSX(function (error, msg) {
      error.should.be.true;
      done();
    });
  });

  it('should support 10.10', function (done) {
    _.getOSXVersion = function (cb) {
      cb(null, "10.10", "");
    };

    _.isMacOSX(function (error, msg) {
      error.should.be.false;
      done();
    });
  });

  it('should sopport 10.10 with newline', function (done) {
    _.getOSXVersion = function (cb) {
      cb(null, "10.10\n", "");
    };

    _.isMacOSX(function (error, msg) {
      error.should.be.false;
      done();
    });
  });

});
