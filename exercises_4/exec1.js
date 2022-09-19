"use strict"

class Person {
    constructor(PIC) {
        this._PIC = PIC;
    }

    get PIC() { return this._PIC; }
    // We usually should not need to change the SSN of a person. However, it is possible that it has been mistyped
    set PIC(PIC) { this._PIC = PIC;}

    // TODO: implement getters for birthDate and PICend
    get birthDate(){
        let year = this._PIC.slice(4,6);
        if (year <= 20){
            year = "20" + year;
        }
        else year = "19" + year;
        let month = this._PIC.slice(2,4);
        let day = this.PIC.slice(0,2);
        return new Date(month + " " + day + " " + year);
    }
    

    get PICend(){
        let end = this.PIC.slice(7);
        return end;
    }

}