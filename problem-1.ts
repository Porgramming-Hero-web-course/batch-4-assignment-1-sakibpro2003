const sumArray = (num: number[]):number=>{
    return num.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
}

// console.log(sumArray([1,2,3,4,5]));