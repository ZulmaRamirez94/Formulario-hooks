import React from 'react';
import './Form.css';

const Form = props => {
    const {forms, setForms} = props;

    const onChange = e => {
        setForms({ 
            ...forms, 
            [e.target.name]: e.target.value });
    };
    
    return(
        <form>
            <div className='contenedor' >
                <label className='labText' htmlFor="FirstName" > First Name</label> 
                <input className='inputStyle' onChange={onChange} type="text" name='FirstName' />
            </div>
            <div className='contenedor'>
            <label className='labText' htmlFor='LastName'>Last name: </label> 
                <input className='inputStyle' onChange={onChange} type="text" name='LastName' />
            </div>
            <div className='contenedor' >
                <label className='labTextEmail' htmlFor='Email'>Email: </label> 
                <input className='inputStyle' onChange={onChange} type="email" name='Email'  />
            </div>
            <div className='contenedor' >
                <label className='labText' htmlFor='Password'>Password: </label>
                <input className='inputStyle' onChange={onChange}  type="password" name='Password'   />
            </div>
            <div className='contenedor' >
                <label className='labText' htmlFor='ConfirmPassword'>Confirm <br/>Password: </label>
                <input className='inputStyle' onChange={onChange} type="password" name='ConfirmPassword'   />
            </div>
        </form>
    );
};
export default Form;