import React from "react";
import {useFormik, Form} from 'formik';
import * as yup from 'yup';

const Registration = ()=>{

    const formik=useFormik({

        initialValues:{
        EmailId:'',
        Name:'',
        Password:''  
        },
        validationSchema: yup.object({
        EmailId: yup.string()
        .email('Invalid email address')
        .required('Please Enter Email Id'),
        Name: yup.string()
        .max(20, 'Name should not exceed 20 Characters')
        .required('Please Enter Employee Name'),
        Password: yup.string()
        .required('Please Enter Employee Password'),    
        }),
    
        onSubmit:values=>{
    
          alert(JSON.stringify(values));
    
        }
    
      });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="EmailId" {...formik.getFieldProps("EmailId")} aria-describedby="emailHelp"/>
                    {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="form-check-label" for="Name">Name</label>
                    <input type="text" className="form-control" name="Name" {...formik.getFieldProps("Name")}/>
                     {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                </div>
                <div className="form-group">
                    <label for="Password">Password</label>
                    <input type="password" name="Password" {...formik.getFieldProps("Password")} className="form-control"/>
                    {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default Registration;