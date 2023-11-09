import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) {
    console.log("Users 없음");
    return null;
  } // 아무것도 안보임

  console.log(`users : ${users}`);
  {
    users.map((user) => {
      console.log(`유저 : ${JSON.stringify(user)}`);
    });

    // for (const user of users) {
    //   for (const property in user) {
    //     console.log(`for 중첩 ${property} ${user[property]}`);
    //   }
    // }
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} {user.name}
        </li>
      ))}
    </ul>
  );
}

export default Users;
