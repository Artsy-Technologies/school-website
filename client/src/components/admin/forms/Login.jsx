/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../../hooks/AdminContext';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    const { setIsAdmin } = useAdmin();


    const singUp = async (data) => {
        let res = await axios.post('/signUp', data);
        if (res?.data?.status === 200) {
            toast.success(res?.data?.message);
            
        } else {
            toast.error(res?.data?.message)
        }

    }

    const signIn = async (data) => {
        let res = await axios.post('/signIn', data);
        if (res?.data?.status === 200) {
            toast.success(res?.data?.message);
            setIsAdmin(true);
            navigate('/dashboard')
        } else {
            toast.error(res?.data?.message);
        }
    }


    return (
        <section className='w-full h-[85%]  flex items-center justify-center  ' >
            {
                login ?
                    <div className='h-[90%] lg:w-[50%] w-[90%] mr-auto ml-auto lg:mt-4 bg-[url(/assets/signup/sign.jpg)] bg-center bg-cover   flex flex-col items-center justify-center  ' >
                        <img src="/assets/signup/profile.svg" alt="" width={80} height={80} />
                        <form onSubmit={handleSubmit(signIn)} >

                            <section>
                                <div className='p-2  '>
                                    <label htmlFor="username" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8]0e8] mb-1 ' > Email </label>
                                    <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-centertext-[gray] font-[500]   '>
                                        <img src="/assets/signup/profile.svg" alt="" width={25} height={25} className='ml-2 ' />
                                        <input type="email" placeholder='Eg.abc@gamail.com' className='bg-transparent text-[gray] p-2  w-[90%] '
                                            {
                                            ...register('email', {
                                                required: "Please Fill The email"
                                            })
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.email && (
                                    <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.email.message}</p>
                                )}

                            </section>

                            <section>
                                <div className='p-2' >
                                    <label htmlFor="password" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >Password</label>
                                    <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                        <img src="/assets/signup/password.svg" alt="" width={22} height={25} className='ml-2 ' />
                                        <input type="password" placeholder='Eg.abc123@' className='bg-transparent  text-[gray]  p-2 w-[90%] '
                                            {
                                            ...register('password', {
                                                required: "Please Fill The Password"
                                            })
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.password && (
                                    <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.password.message}</p>
                                )}

                            </section>

                            <button type='submit' className=' w-[96%] mt-2 p-[.5rem] rounded-lg ml-2 bg-[#461ed3] text-white font-[500] hover:bg-[#765de9] ' >
                                Login
                            </button>



                        </form>
                        <h1 onClick={() => setLogin(false)} className='text-red-500 font-bold mt-2 cursor-pointer ' >Sing-up</h1>
                    </div>
                    :
                    <div className='h-[90%] lg:w-[50%] w-[90%] mr-auto ml-auto lg:mt-4 bg-[url(/assets/signup/sign.jpg)] bg-center bg-cover   flex flex-col items-center justify-center  ' >
                        <form onSubmit={handleSubmit(singUp)} >

                            <section className='leading-3 ' >
                                <div className='p-2  leading-4'>
                                    <label htmlFor="username" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8]0e8] mb-1 ' > Email </label>
                                    <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-centertext-[gray] font-[500]   '>
                                        <img src="/assets/signup/profile.svg" alt="" width={25} height={25} className='ml-2 ' />
                                        <input type="email" placeholder='Eg.abc@gamail.com' className='bg-transparent text-[gray] p-2  w-[90%] '
                                            {
                                            ...register('email', {
                                                required: "Please Fill The email"
                                            })
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.email && (
                                    <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.email.message}</p>
                                )}
                            </section>

                            <section className='leading-3 mt-1 ' >
                                <div className='p-2 leading-4 '>
                                    <label htmlFor="username" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8]0e8] mb-1 ' > Admin Token </label>
                                    <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-centertext-[gray] font-[500]   '>
                                        <img src="/assets/signup/profile.svg" alt="" width={25} height={25} className='ml-2 ' />
                                        <input type="text" placeholder='Eg.abc@gamail.com' className='bg-transparent text-[gray] p-2  w-[90%] '
                                            {
                                            ...register('token', {
                                                required: "Please Fill The Admin Token"
                                            })
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.token && (
                                    <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.token.message}</p>
                                )}
                            </section>

                            <section className='leading-3 my-1  ' >
                                <div className='p-2 leading-4 ' >
                                    <label htmlFor="password" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >Password</label>
                                    <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                        <img src="/assets/signup/password.svg" alt="" width={22} height={25} className='ml-2 ' />
                                        <input type="password" name='password' placeholder='Eg.abc123@' className='bg-transparent  text-[gray]  p-2 w-[90%] '
                                            {
                                            ...register('password', {
                                                required: "Please Fill The Password"
                                            })
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.password && (
                                    <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.password.message}</p>
                                )}
                            </section>

                            <button type='submit' className=' w-[96%] mt-4 p-[.5rem] rounded-lg ml-2 bg-[#461ed3] text-white font-[500] hover:bg-[#765de9] ' >
                                Sign-up
                            </button>



                        </form>
                        <h1 onClick={() => setLogin(true)} className='text-red-500 font-bold mt-2 cursor-pointer ' >Sign-In</h1>
                    </div>
            }
        </section>
    );
};

export default Login;
