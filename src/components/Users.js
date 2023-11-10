import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(JSON.stringify(response.data));
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, []);
  const { loading, data: users, error } = state;
  console.log(`state : ${state}`);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) {
    console.log("Users 없음");
    return null;
  } // 아무것도 안보임

  console.log(`users : ${users}`);

  users.map((user) => console.log(`유저 : ${JSON.stringify(user)}`));

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Users;
