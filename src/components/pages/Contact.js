import React from "react";
import {useFormik, Form} from 'formik';


const validateEmployee = empData => {

    const errors = {};
    if (!empData.EmailId) {
        errors.EmailId = 'Please Enter Email ID';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
        errors.EmailId = 'Invalid email address';
    }
    if (!empData.Name) {
      errors.Name = 'Please Enter Employee Name';
    } else if (empData.Name.length > 20) {
      errors.Name = 'Name cannot exceed 20 characters';
    }
    if (!empData.Password) {
      errors.Password = 'Please Enter Employee Password';
    } 
    return errors;

};

const Contact = ()=>{

    const formik = useFormik({
        initialValues:{
        EmailId:'',
        Name:'',
        Password:'',
        },
        validate:validateEmployee,
        onSubmit: values =>{
        alert(JSON.stringify(values));
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="EmailId" id="EmailId" value={formik.values.EmailId}
                    onChange={formik.handleChange} aria-describedby="emailHelp"/>
                    {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="form-check-label" for="Name">Name</label>
                    <input type="text" className="form-control" name="Name" id="Name" value={formik.values.Name}
                    onChange={formik.handleChange}/>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                </div>
                <div className="form-group">
                    <label for="Password">Password</label>
                    <input type="password" name="Password" value={formik.values.Password}
                    onChange={formik.handleChange} className="form-control" id="Password"/>
                    {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default Contact;