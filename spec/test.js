var assert = require('assert');
describe('Array', function() {

    //Test script for UAT

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});