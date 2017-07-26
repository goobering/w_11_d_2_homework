var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
    var dinosaur;

    beforeEach(function() {
        dinosaur = new Dinosaur('testType', 3);
    });

    it('has type', function(){
        assert.strictEqual(dinosaur.type, 'testType');
    });

    it('has offspring', function(){
        assert.strictEqual(dinosaur.numOffspring, 3);
    });
});