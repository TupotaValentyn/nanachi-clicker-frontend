import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className='login '>
            <h1 className='login-title'>Nanachi clicker</h1>
            <span className="icons"><img src="nanachi1.png" alt=""/></span>
            <button className="login-btn ">
                <img src="google-plus.svg" alt="icon"/>
            </button>
            <span className="icons_right"><img src="nanachi2.png" alt=""/></span>
            <div class="social">
				<a href="#" class="flickr"></a>
				<a href="#" class="twi"></a>
				<a href="#" class="fb"></a>
				<a href="#" class="pin"></a>
			</div>
        </div>
    )
}

export default Login;