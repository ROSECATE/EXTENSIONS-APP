
import React,{useState} from 'react';
import { FaUser , FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  console.log(username)
  console.log(password)

  const handleSubmit = () =>{
    const loginData ={username:username,password:password}

    alert(JSON.stringify(loginData))

  }
  
    return (
      <div className='wrapper'>
    
          <form className='form'>
            <div className='header'>
            <div className='text'>LOGIN</div>
              <div className='underline'></div>
            
            </div>
              
              <div className='input-box'>
              <input type='text' name='username' placeholder='Username' 
              value={username}
               onChange={(e)=>setUsername(e.target.value)}
              /> <FaUser className='icon'/><br></br><br></br>
              </div>
  
              <div className='input-box'>
              <input type='password' name='password' placeholder='Enter Password' 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} />
              <FaLock className='icon' /><br></br>
              </div><br></br>
              
              <div className='remember-forgot'>
                  <a href='#'>Forgot Password?</a><br></br>
              </div>
              
              <div  className='submit-container'>
                <input className='submit' type="button"
                 onClick={handleSubmit} 
                 value="Login"/>
          
              </div>
             
              <div className='register-link'>
                  <p>Don't Have An Account? <Link to="SignUp"> SignUp</Link>.</p>
                  
              </div>
  
  
          </form>
        
      </div>
    );
  }

export default Login

