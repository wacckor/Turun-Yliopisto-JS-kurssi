"use strict";

/**
 * Grid3D is a 3-dimensional array. Initially it contains null values.
 * 
 * @param {number} slices The size of the Grid in the first dimension
 * @param {number} rows The size of the Grid in the second dimension
 * @param {number} columns The size of the Grid in the third dimension
 */
class Grid3D{
    constructor(slices, rows, columns){
        this.slices = slices;
        this.rows = rows;
        this.columns = columns;
        this.arr = this.grid3DArr(this.slices,this.rows,this.columns);
    }


    grid3DArr(slices, rows, columns) {
        let arr = new Array(slices);
        for(let slice_num = 0; slice_num < arr.length; slice_num++) {
            arr[slice_num] = new Array(rows);
            for(let row_num = 0; row_num < arr[slice_num].length; row_num++) {
                arr[slice_num][row_num] = new Array(columns);
                arr[slice_num][row_num].fill(null);
            }
        }
        return arr;
    }
    
    getValue(slice_num, row_num, col_num){
        return this.arr[slice_num][row_num][col_num];
    }
    setValue(slice_num, row_num, col_num, value){
        this.arr[slice_num][row_num][col_num] = value;
    }   

}