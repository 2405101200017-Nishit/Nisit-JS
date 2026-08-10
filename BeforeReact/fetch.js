fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

    // async await

    async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
}

getUsers();