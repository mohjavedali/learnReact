import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = ()=>{
    let Navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    const {name, username, email,phone, website} = user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value});
    }
    useEffect(()=>{
        loadUsers();
    }, []);
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        Navigate("/");
    }
    const loadUsers = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={name} onChange= {e=>onInputChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">User Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" name="username" value={username} onChange={ e=>onInputChange(e)}  />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={email} onChange= {e=>onInputChange(e)}  />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone" name="phone" value={phone} onChange= {e=>onInputChange(e)}  />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Website Url</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Website Url" name="website" value={website} onChange= {e=>onInputChange(e)}  />
            </div>
            <div className="form-group">
                <button className="btn btn-warning btn-block">Update User</button>
            </div>
        </form>
        </div>
        </div>
    )
}
export default EditUsers;