import React, { useEffect } from "react";
import styled from "styled-components";
import { getUser, useUserDispatch, useUsersState } from "../UsersContext";

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

function User({ id }) {
    const state = useUsersState();
    const dispatch = useUserDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { loading, data: user, error } = state.user;

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
