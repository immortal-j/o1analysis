import { Box} from '@mui/material'
import { flexbox } from '@mui/system';
import React, { useState } from 'react'

const defaultValues = {
    email: "",
    key: "",
    college_name: "",
    student_name: "",
  };

  
const Form = () => {    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const email = event.target.name;
      const key = event.target.value;
      const college_name = event.target.value;
      const student_name = event.target.value;
      setInputs(values => ({...values, [email]: email,[key]:key,[college_name]:college_name,[student_name]:student_name }))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  

  return (
<>
<Box position='absolute' top="30vh" right="20vw" height="10vh" width="25vw" color="white">


<form onSubmit={handleSubmit} sx={{display:flexbox, flexDirection:"column"}}>

      <label>Enter your email:
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      <br />
      </label>
      <label>Enter your key:
        <input 
          type="text" 
          name="key" 
          value={inputs.key || ""} 
          onChange={handleChange}
        />
 </label>
      <label>Enter your college_name:
        <input 
          type="text" 
          name="college_name" 
          value={inputs.college_name || ""} 
          onChange={handleChange}
        />
 </label>
      <label>Enter your key:
        <input 
          type="text" 
          name="student_name" 
          value={inputs.student_name || ""} 
          onChange={handleChange}
        />

        </label>
        <input type="submit" />
    </form>


</Box>

</>
  )
}

export default Form;