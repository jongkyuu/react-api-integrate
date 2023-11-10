const axios = require("axios");

async function fetchData() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response;
}

const users = await fetchData();
const fiveUsers = users.filter((user) => user.id <= 5);

async function test() {
    return await fetchData();
}

// JSON.stringify
console.log(`users : ${JSON.stringify(fiveUsers)}`);

console.log("test() 호출");
console.log(test());
console.log("await test() 호출");
console.log(await test());
