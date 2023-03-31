// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function fn(response){
//     return response.json();
// })
// .then(function f(value){
//     console.log(value);
// });

async function fetchData(){
    try {
     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     let data = await response.json();
     console.log(data);
    } catch (error) {
     console.error(error);
    }
 }
 fetchData();