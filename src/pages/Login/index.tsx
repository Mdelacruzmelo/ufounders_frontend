import * as React from 'react';
import FadeIn from 'react-fade-in';
import './Login.scss'

const Login = () => {

    return (
        <FadeIn>
            <div className='page'>

                <div className='loginContainer'>

                    <div className='inputForm'>
                        <label htmlFor='user'>Username</label>
                        <input id='user' type="text" />
                    </div>

                    <div className='inputForm'>
                        <label htmlFor='pass'>Password</label>
                        <input id='pass' type="password" />
                    </div>

                    <div className='inputForm'>
                        <button>Login</button>
                    </div>

                </div>

            </div>
        </FadeIn>
    )
}

export default Login