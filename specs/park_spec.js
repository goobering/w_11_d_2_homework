var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('Park', function(){
    var park, dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6;

    beforeEach(function() {
        park = new Park();
        dinosaur1 = new Dinosaur('testDinosaur1', 1);
        dinosaur2 = new Dinosaur('testDinosaur2', 2);
        dinosaur3 = new Dinosaur('testDinosaur2', 2);
        dinosaur4 = new Dinosaur('testDinosaur3', 3);
        dinosaur5 = new Dinosaur('testDinosaur3', 3);
        dinosaur6 = new Dinosaur('testDinosaur3', 3);
    });

    it('enclosure starts empty', function(){
        assert.strictEqual(park.enclosure.length, 0);
    });

    it('can add dinosaur', function(){
        park.addDinosaur(dinosaur1);
        assert.strictEqual(park.enclosure.length, 1);
    });

    it('can remove dinosaurs of type', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        park.addDinosaur(dinosaur4);
        park.addDinosaur(dinosaur5);
        park.addDinosaur(dinosaur6);

        assert.strictEqual(park.enclosure.length, 6);
        park.removeDinosaurs(dinosaur1.type);
        assert.strictEqual(park.enclosure.length, 5);
    });

    it('can get dinos producing more than 2 offspring', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        park.addDinosaur(dinosaur4);
        park.addDinosaur(dinosaur5);
        park.addDinosaur(dinosaur6);

        assert.strictEqual(park.offspringOver(2), 5);
    });

    it('can calculate how many dinosaurs after year 1 from 1 dinosaur', function(){
        assert.strictEqual(park.projection(1, 1, dinosaur1.numOffspring), 1);
        assert.strictEqual(park.projection(1, 1, dinosaur2.numOffspring), 2);
        assert.strictEqual(park.projection(1, 1, dinosaur4.numOffspring), 3);
    });

    it('can calculate how many dinosaurs after year 2 from 1 dinosaur', function(){
        assert.strictEqual(park.projection(2, 1, dinosaur1.numOffspring), 2);
        assert.strictEqual(park.projection(2, 1, dinosaur2.numOffspring), 4);
        assert.strictEqual(park.projection(2, 1, dinosaur4.numOffspring), 6);
    });

    it('can calculate how many dinosaurs after year 2 from 2 dinosaurs', function(){
        assert.strictEqual(park.projection(2, 2, dinosaur1.numOffspring), 4);
        assert.strictEqual(park.projection(2, 2, dinosaur2.numOffspring), 8);
        assert.strictEqual(park.projection(2, 2, dinosaur4.numOffspring), 12);
    });
});