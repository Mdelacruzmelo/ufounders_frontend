import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { useNavigate } from "react-router-dom";
import './Login.scss'
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogInCircle } from "react-icons/bi";
import { useAppDispatch } from 'src/hooks/redux'
import { loginApi } from './api';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>("rodrigo@gmail.com")
    const [password, setPassword] = useState<string>("123456")

    const alertOptions: ToastOptions = {
        className: 'toast-alert',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored'
    }

    const login = async () => {

        const response: any = await dispatch(loginApi.endpoints.login.initiate({ email, password }))
        const error = response?.error?.data?.message

        if (Array.isArray(error)) {
            error.forEach((element: string) => {
                toast.error(element, { ...alertOptions, className: 'toast-alert error' })
            });
        } else {
            toast.error(error, { ...alertOptions, className: 'toast-alert error' });
        }

        const token = response?.data?.token
        if (token) {
            console.log('~ process.env.STORAGE_KEY', process.env.STORAGE_KEY)
            toast.success("Authenticated", { ...alertOptions, className: 'toast-alert success' })
            localStorage.setItem(`${process.env.REACT_APP_STORAGE_KEY}`, token)
            navigate("/");
        }

    }

    return (
        <FadeIn>
            <div className='page'>

                <div className='loginContainer'>

                    <div className='inputForm'>
                        <label htmlFor='user'>Username</label>
                        <input
                            id='user'
                            type="text"
                            value={email}
                            onChange={({ target }) => { setEmail(target.value) }} />
                    </div>

                    <div className='inputForm'>
                        <label htmlFor='pass'>Password</label>
                        <input
                            id='pass'
                            type="password"
                            value={password}
                            onChange={({ target }) => { setPassword(target.value) }} />
                    </div>

                    <div className='inputForm'>
                        <button onClick={login}>
                            Login <BiLogInCircle />
                        </button>
                    </div>

                </div>
            </div>
            <ToastContainer newestOnTop={true} />
        </FadeIn>
    )
}

export default Login