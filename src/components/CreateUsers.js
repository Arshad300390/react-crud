import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreaterUsers() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/user/save', inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });
    }
    const [inputs, setinputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
    }
    return (
        <div>
            <h1>Creater Users</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="name" placeholder="Name" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="text" name="email" placeholder="Email" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td><input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} /></td>
                        </tr>
                        <tr><td colSpan="2" align="right"><button >Save</button></td> </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}