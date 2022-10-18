import React from 'react';
import useForm from '../Hooks/useForm';

const Login = () => {

      //Final submit function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (    
    <div className="container">
        <div className="py-4">
            <h1 className="display-4">Login Page.</h1><hr/>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {
                        errors.email && <h3>{errors.email}</h3>
                    }
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputUserName">User Name</label>
                    <input type="text" minLength='5' required name="username" placeholder="username" onChange={handleChange} className="form-control" id="exampleInputUserName" />
                    {
                        errors.username && <h3>{errors.username}</h3>
                    }
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input minLength='8' type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    {
                        errors.password && <h3>{errors.password}</h3>
                    }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Login;
