import React, { useState } from "react";
import User from "./User";
import styled from "styled-components";
import { getUsers, useUsersDispatch, useUsersState } from "../UsersContext";

const UsersBlock = styled.div`
    li {
        cursor: pointer;
        margin-top: 10px;
    }
`;

function Users() {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { loading, data: users, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) {
        return <button onClick={fetchData}>불러오기</button>;
    } // 아무것도 안보임

    // console.log(`users : ${users}`);

    // users.map((user) => console.log(`유저 : ${JSON.stringify(user)}`));

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
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </UsersBlock>
    );
}

export default Users;
