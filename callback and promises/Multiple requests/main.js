async function multipleRequest() {
    let firstReq = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let secondReq = fetch("https://jsonplaceholder.typicode.com/posts/1");

    const [todoResponse, postResponse] = await Promise.all([firstReq, secondReq]);

    const todo = await todoResponse.json();
    const post = await postResponse.json();

    const result = {todo, post}

        console.log(result);
}
multipleRequest();


  