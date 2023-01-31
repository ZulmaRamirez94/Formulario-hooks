import './App.css';
import Form from './Components/Form';
import React, {useState} from "react";
import ContainerForm from './Components/ContainerForm';

const App = () => {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword:""
  });
  return(
    <div className='appStyle'>
      <Form forms={state} setForms={setState} />
      <ContainerForm data={state} />
    </div>
  );
}
export default App;
