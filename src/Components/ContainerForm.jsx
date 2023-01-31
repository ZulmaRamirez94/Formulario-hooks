import React from 'react'

const ContainerForm =({data}) => {
    const {FirstName, LastName, Email, Password, ConfirmPassword} = data;
  return (
    <div>
        <h1>Your Form Data</h1>
        <p>First Name: {FirstName}</p> 
        <p>Last Name: {LastName}</p> 
        <p>Email: {Email}</p> 
        <p> Password: {Password}</p>
        <p>Confirm Password: {ConfirmPassword}</p>
    </div>
  )
}
export default ContainerForm;