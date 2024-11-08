const sumArray = (num: number[]):number=>{
    return num.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
}
