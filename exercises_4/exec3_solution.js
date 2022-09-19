"use strict";

class Organism{
    constructor(mass, locX, locY){
        this.mass = this.setMass(mass);
        [this.xLocation, this.yLocation] = this.setLocation(locX,locY);
        this.age = 0;
    }
    increaseAge(){
        this.age += 1;
    }
    setMass(mass){
        if (mass >= 0) return this.mass = mass;
    }
    setLocation(x, y){
        
        return [this.xLocation = x, this.yLocation = y];
    }
    getAge(){
        return this.age;
    }
    getMass(){
        return this.mass;
    }
    getXLocation(){
        return this.xLocation;
    }
    getYLocation(){
        return this.yLocation;
    }


}