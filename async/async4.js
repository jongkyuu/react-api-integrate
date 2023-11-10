const axios = require("axios");

async function fetchData() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response;
}

const data = fetchData();
console.log(data);

data.then(function (users) {
    console.log(users.data.filter((user) => user.id <= 3));
});
