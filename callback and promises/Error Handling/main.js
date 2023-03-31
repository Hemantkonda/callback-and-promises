fetch('https://jsonplaceholder.typicode.com/posts/123456789')
.then(response=> {
    if(!response.ok){
        throw new Error("network response is not ok")
    }
    return response.json()
})
.then(data=> console.log(data))
.catch(err=>{
    console.log(err);
    const errorMsg = document.createElement("p")
    errorMsg.innerText = "An error occurred while fetching data."
    document.body.appendChild(errorMsg)
});