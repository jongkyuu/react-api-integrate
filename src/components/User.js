import React from "react";
import axios from "axios";
import useAsync from "./useAsync";
import styled from "styled-components";

const LoadingBlock = styled.div`
    padding: 32px;
    margin-top: 20px;
    border: 2px solid gray;
`;

const StyledUser = styled.div`
    padding: 32px;
    margin-top: 20px;
    border: 2px solid gray;
`;

async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User({ id }) {
    const [state] = useAsync(() => getUser(id), [id]);
    const { loading, data: user, error } = state;

    if (loading) return <LoadingBlock>로딩중...</LoadingBlock>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    return (
        <StyledUser>
            <h2>{user.username}</h2>
            <p>
                <b>Email :</b> {user.email}
            </p>
        </StyledUser>
    );
}

export default User;
