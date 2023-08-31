import React, { useEffect, useState ,useCallback} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function ListUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = useCallback(() => {
        axios.get('http://localhost:8080/api/users').then(function (response) {
            // console.log(response.data);
            setUsers(response.data);
            
        });
    },[])
    useEffect(() => {
        getUsers();
    }, [getUsers]);
    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
           // navigate('/');
        })
    }
    return (
        <div>
            <h1>List of Users</h1>
            <table>
                <thead>
                    <tr><th>#</th><th>Name</th><th>Email</th><th>Mobile</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {
                        users.map((user, key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }}>Edit</Link>
                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}
