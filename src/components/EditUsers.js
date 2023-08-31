import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUsers() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getUsers()
    }, []);
    function getUsers() {
        axios.get(`http://localhost:8080/api/user/${id}`).then(function (response) {
            // console.log(response.data);
            setInputs(response.data);

        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/api/user/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input value={inputs.name} type="text" name="name" placeholder="Name" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input value={inputs.email} type="text" name="email" placeholder="Email" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td><input value={inputs.mobile} type="text" name="mobile" placeholder="Mobile" onChange={handleChange} /></td>
                        </tr>
                        <tr><td colSpan="2" align="right"><button >Save</button></td> </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}