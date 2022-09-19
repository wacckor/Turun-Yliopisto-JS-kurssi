"use strict";

class Organism{
    constructor(mass, locX, locY, maxAge){
        this.mass = this.setMass(mass);
        [this.locX, this.locY] = this.setLocation(locX,locY);
        this.age = 0;
        this.maxAge = maxAge;
        this.isAlive = true;
    }
    
    setMass(mass){
        if (mass >= 0) return this.mass = mass;
    }
    setLocation(x, y){
        
        return [this.locX = x, this.locY = y];
    }
    
    getAge(){
        return this.age;
    }
    getMass(){
        return this.mass;
    }
    getXLocation(){
        return this.locX;
    }
    getYLocation(){
        return this.locY;
    }
    getMaxAge(){
        return this.maxAge;
    }

    performTimeStep(){
        this.age += 1;
        if (this.age <= this.maxAge){
            this.isAlive = true;
        }
        else this.isAlive = false;
    }

}
class Plant extends Organism{
  
    performTimeStep(){
        super.performTimeStep();
        this.mass = this.mass * 1.01;
    }
}
class Animal extends Organism{
    
    move(){
        let newX = Math.floor(Math.random() * (this.locX + 2 - this.locX + 1)) + this.locX -1;
        let newY = Math.floor(Math.random() * (this.locY + 2 - this.locY + 1)) + this.locY -1;
        this.locX = newX;
        this.locY = newY;
        console.log( "Animal has moved to x = "+ this.locX + ", y = " + this.locY + "."); 
        
    }
}
