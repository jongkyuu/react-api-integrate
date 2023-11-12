import React, { useEffect, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";
import styled from "styled-components";

const UsersBlock = styled.div`
    li {
        cursor: pointer;
        margin-top: 10px;
    }
`;

async function getUsers() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(JSON.stringify(response.data));
    return response.data;
}

function Users() {
    const [state, refetch] = useAsync(getUsers, [], true); // 요청에 대한 상태를 관리하는 부분을 useAsync Hook에서 처리
    const [userId, setUserId] = useState(null);

    const { loading, data: users, error } = state;

    refetch();

    // useEffect(() => {
    //     refetch();
    // }, [refetch]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) {
        return <button onClick={refetch}>불러오기</button>;
    } // 아무것도 안보임

    console.log(`users : ${users}`);

    users.map((user) => console.log(`유저 : ${JSON.stringify(user)}`));

    const onUserClick = (id) => {
        setUserId(id);
    };

    return (
        <UsersBlock>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => onUserClick(user.id)}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </UsersBlock>
    );
}

export default Users;
