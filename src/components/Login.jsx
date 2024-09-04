// src/components/Login.js
import React, { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
// import Logincheck from '../images/logincheck.jpeg'
import Logincheck from '../images/check.png'



const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password);
    navigate('/dashboard');
  };

  // Redirect to dashboard if already logged in
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <div className="login-page d-flex">


        <div className="row login-box rounded-4">
          <div className=" col-md-5 left position-relative p-4">
            <div className='text-center mt-5'>
              <h3 className='text-light'>SignUp</h3>
              <p className='text-light fs-13 m-0 lh-1'>To use all feature of the application </p>
            </div>

            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
            <div className="circle five"></div>
            <div className="circle six"></div>
            <div className=" seven">
              <img src={Logincheck} alt="" />
            </div>


          </div>

          <div className="col-md-7 right position-relative p-4">
            <form class="p-5" onSubmit={handleSubmit}>
              <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input class="login-form" id="staticEmail2" type="email" name="email" placeholder="Email" required />
              </div>
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input type="password" class="login-form" id="inputPassword2" placeholder="Password" name="password" required />
              </div>
              <input type="checkbox"/> &nbsp;<span className='check-form'> Keep me Login in this device</span>
              <br /><br /><br /><br /><br />
              <div class="col-auto text-center">
                <button type="submit" class="btn submit-btn mb-3 rounded-5">Login</button>
              </div>
            </form>
          </div>


        </div>





      </div>



    </>
  );
};

export default Login;
