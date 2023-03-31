function doubleArray(arr, callback){
    const doubleArr = arr.map(callback);
    return doubleArr;
}

const arr = [1, 2, 3, 4, 5];
const callback = doubleArray(arr,(num)=> num * 2);
console.log(callback);

