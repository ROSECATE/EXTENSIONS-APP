import {useState } from 'react'
import { Link} from 'react-router-dom';
import { GiRank3 ,} from "react-icons/gi";
import { FaUser , FaLock} from 'react-icons/fa';
import { AiOutlineFieldNumber } from "react-icons/ai";

import axios, { Axios } from 'axios';



function Signup ()  {
  const url ="http://localhost:3001/api/v1/users/"
  const [formData, setFormData] = useState({
    svc_no:"",
    rank:"",
    name:"",
    username:"",
    password:""
  });
 const handleChange = (e) => {
  setFormData({
    ...formData,[e.target.name]: e.target.value
  });
};


  const handleSubmit =(e) =>{
    console.log(formData);
    e.preventDefault();

    axios.post(url ,formData)
    .then(function(res){
      console.log(res)
    })
    .catch(function(error){
      console.error(error)
    });
  };
  

  return (
    <div className='wrapper'>
    
          <form className='form' onSubmit={handleSubmit}>
            <div className='header'>
            <div className='text'>SIGN UP</div>
              <div className='underline'></div>
            
            </div>
              
              <div className='input-box'>
              <input  value={formData.svc_no} onChange={handleChange} name='svc_no' placeholder='Service Number'type='number'
              /> <AiOutlineFieldNumber className='icon'/><br></br>
              </div>

              <div className='input-box'>
              <input  value={formData.rank} onChange={handleChange} name='rank' placeholder='Rank' type='dropdown'
              /> <GiRank3 className='icon'/><br></br>
              </div>

              <div className='input-box'>
              <input  value={formData.name} onChange={handleChange} type='text' name='name' placeholder='Name' 
              /> <FaUser className='icon'/><br></br>
              </div>

              <div className='input-box'>
              <input   value={formData.username} onChange={handleChange} type='text'  name='username' placeholder='Username'
              /> <FaUser className='icon'/><br></br>
              </div>
  
              <div className='input-box'>
              <input value={formData.password} onChange={handleChange} type='password' name='password' placeholder='Enter Password' />
              <FaLock className='icon' /><br></br>
              </div><br></br>
              
              <div className='remember-forgot'>
                  <a href='#'>Forgot Password?</a><br></br>
              </div>
              
              <div  className='submit-container'>
                <input onClick={handleSubmit} className='submit' type="button"
                 value="SignUp"/>
          
              </div>
             
              <div className='register-link'>
                  <p>Already Have An Account? <Link to="Login"> Login</Link></p>
                  
              </div>
  
  
          </form>
        
      </div>
  )
}

export default Signup

