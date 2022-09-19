"use strict"

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        let dat = this.data[index];     
        if(dat === undefined){
                throw new ReferenceError("MY error throw of get");
        }
        if(dat != undefined){
            return dat;
        }
    }

    set(index, value){
        if(index < 0 || index > this.length || typeof index != "number"){
            throw new ReferenceError("My error throw of set");
        }
        this.data[index] = value; 
        if(index == this.length){
            this.length += 1;
        }
        
    }
}