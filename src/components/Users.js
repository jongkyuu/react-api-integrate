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
                setLoading(false);
            } catch (e) {}
        };
    }, []);
    return <div>Users</div>;
}

export default Users;
