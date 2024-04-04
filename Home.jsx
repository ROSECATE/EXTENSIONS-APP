import { Outlet,NavLink } from "react-router-dom"
import React from 'react'
import { FaUser , FaLock} from "react-icons/fa";

const Home = () => {
  return (
    <div className='contact'>
        <h3>EXTENSION MANAGER</h3>
        <form>
            <label>
                <span>ENTER APPOINTMENT:</span>
                <input type='text' name='text' required />
            </label>
            <label>
                <span>YOUR BRANCH:</span>
                <input type='text' name='text' required />
                
            </label>
            <label>
                <span>EXTENSION NUMBER:</span>
                <textarea name='message' required />
            </label>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Home
