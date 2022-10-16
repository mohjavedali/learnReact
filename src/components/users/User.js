import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

 const User = ()=>{
    let Navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    useEffect(()=>{
        loadUsers();
    }, []);
    const loadUsers = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    return <div className="container">
        <Link className="btn btn-primary" to="/">Back To Home</Link>
        <h1 className="display-4">User Id: {id}</h1><hr/>
        <ul className="list-group w-50">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">User Name: {user.username}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Phone: {user.phone}</li>
            <li className="list-group-item">Website: {user.website}</li>
        </ul>
        
    </div>
 }
export default User;
