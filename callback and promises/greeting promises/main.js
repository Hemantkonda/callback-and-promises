function createPromise(name) {
    return new Promise(function execu(resolve, reject) {
        if (typeof name === "string") {
            resolve(`hello ${name}`)
        }else{
            reject("Name Must Be String");
        }
    })
}

createPromise("Hemant")
.then(function gretting(val) {
    console.log(val);
})
.catch(function error(err) {
    console.log(err);
});