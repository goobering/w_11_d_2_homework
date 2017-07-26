var Dinosaur = require('./dinosaur.js');

var Park = function(){
    this.enclosure = [];
}

Park.prototype = {
    addDinosaur: function(dinosaur){
        this.enclosure.push(dinosaur);
    },
    removeDinosaurs: function(dinoType){

        var i = this.enclosure.length;
        while (i--) {
            if (this.enclosure[i].type === dinoType) {
                this.enclosure.splice(i, 1);
            }
        }
    },
    offspringOver: function(numOffspring){
        var count = 0;

        for(dino of this.enclosure){
            if(dino.numOffspring >= numOffspring){
                count++;
            }
        }
        return count;
    },
    projection: function(numYears, numDinos, numOffspring){
        return numYears * numDinos * numOffspring;
    }
}

module.exports = Park;