
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box} from '@mui/material'
import { flexbox } from '@mui/system';

const defaultValues = {
    email: "",
    key: "",
    college_name: "",
    student_name: "",
  };


  
const Form = () => {    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify( inputs));
    }
  

  return (
<>
<Box color="white"  >


<form onSubmit={handleSubmit}>

<Box>


      <label>Enter your email:
      <Inputs 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
        placeholder="johndeo@gmail.com"
      />
      <br />
      </label></Box>
      <Box>
      <label>Enter your key:
        <Inputs 
          type="text" 
          name="key" 
          value={inputs.key || ""} 
          onChange={handleChange}
          placeholder="adje8e5"
        />
 </label></Box>
      <label>Enter your college name:
        <Inputs 
          type="text" 
          name="college_name" 
          value={inputs.college_name || ""} 
          onChange={handleChange}
          placeholder="RCOEM"
        />
 </label>
 <Box>
      <label>Student Name:
        <Inputs 
          type="text" 
          name="student_name" 
          value={inputs.student_name || ""} 
          onChange={handleChange}
          placeholder="Twinshu Parmar"
        />

        </label></Box>
        <Box>

        <Button style={{padding:"5px",margin:"10px auto"}} type="submit" >Submit</Button>
        </Box>
    </form>


</Box>

</>
  )
}

export default Form;


const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid white;
color: white;
margin: 0 1em;
padding: 0.25em 1em;
`


const Inputs = styled.input`
background: transparent;
border-radius: 3px;
border: 2px solid white;
color: white;
margin: 0 1em;
padding: 0.25em 1em;
&:focus {
  border: none
}
`