'use strict';

angular.module('anApp')
  .service('Balance', function () {
   this.nombreIteration = 0;
   this.listBall = [
	  {"num" : 1, "poid": 8}, {"num" : 2, "poid": 8}, {"num" : 3, "poid": 8},
	  {"num" : 4, "poid": 8}, {"num" : 5, "poid": 8}, {"num" : 6, "poid": 8},
	  {"num" : 7, "poid": 8}, {"num" : 8, "poid": 8}];
	
    // ajouter poid	
    this.ajouterPoid = function(num) {
		this.listBall[num - 1].poid += 1;
	};
	
	// rest poid
	this.resetPoid = function(num) {
		this.listBall[num].poid -= 1;
	};
	
	// execute
	this.execute = function(){
		
	 this.nombreIteration+=1;
		if (this.peserArray(0, 2) > this.peserArray(3, 5)) {
		    this.nombreIteration += 1;
			return this.getMax(0, 2);
		}
		else if (this.peserArray(0, 2) < this.peserArray(3, 5)) {
			 this.nombreIteration += 1;
			return this.getMax(3, 5);
		}
		else { this.nombreIteration += 1;
			return this.getMax(6, 8);}
	};
	
	// peser array
	this.peserArray = function(start, end) {
	
		this.total = 0;
		for (var i=start; i<=end; i++) {
			this.total += this.listBall[i].poid;
		}
		return this.total;
	};
	
	// get max
	this.getMax = function(start, end) {
		
		if (this.listBall[start].poid > this.listBall[end - 1].poid) {return start+1;}
	else if (this.listBall[start].poid < this.listBall[end - 1].poid){ return end;}
		else return end+1;
	};
	//reset poid
	this.resetPoids = function() {
		for (var i=0; i<=7; i++) {
		this.listBall[i].poid=8;
		}
	
	};
	
  });