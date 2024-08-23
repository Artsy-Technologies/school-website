/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

function FeeTableModel({ showModel }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const createFee = async (data) => {
        try {
            const response = await axios.post('/api/admin/createFeeTable', data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="h-screen flex justify-center mt-2 backdrop:[3px]  " >
            <div className="bg-[rgba(255,255,255,0.2)] bg-white w-[80%] h-min p-8   " >
                <RxCross2 onClick={() => showModel()} className="cursor-pointer " />
                <form onSubmit={handleSubmit(createFee)} >

                    <section>
                        <div className="p-2 " >
                            <label htmlFor="username" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8]0e8] mb-1 ' > Program Name </label>
                            <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-centertext-[gray] font-[500]   '>
                                <input type="programName" placeholder='Eg.kinder gertan' className='bg-transparent text-[gray] p-2  w-[100%] '
                                    {
                                    ...register('programName', {
                                        required: "Please Fill The programName"
                                    })
                                    }
                                />
                            </div>
                        </div>
                        {errors.programName && (
                            <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.programName.message}</p>
                        )}

                    </section>

                    <section>
                        <div className='p-2' >
                            <label htmlFor="ageGroup" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >ageGroup</label>
                            <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                <input type="text" placeholder='Eg.1-2' className='bg-transparent  text-[gray]  p-2 w-[100%] '
                                    {
                                    ...register('ageGroup', {
                                        required: "Please Fill The ageGroup"
                                    })
                                    }
                                />
                            </div>
                        </div>
                        {errors.ageGroup && (
                            <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.ageGroup.message}</p>
                        )}

                    </section>

                    <section>
                        <div className='p-2' >
                            <label htmlFor="annualFee" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >annualFee</label>
                            <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                <input type="number" placeholder='Eg.2000' className='bg-transparent  text-[gray]  p-2 w-[100%] '
                                    {
                                    ...register('annualFee', {
                                        required: "Please Fill The annualFee"
                                    })
                                    }
                                />
                            </div>
                        </div>
                        {errors.annualFee && (
                            <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.annualFee.message}</p>
                        )}

                    </section>

                    <section>
                        <div className='p-2' >
                            <label htmlFor="registrationFee" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >registrationFee</label>
                            <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                <input type="number" placeholder='Eg.1000' className='bg-transparent  text-[gray]  p-2 w-[100%] '
                                    {
                                    ...register('registrationFee', {
                                        required: "Please Fill The registrationFee"
                                    })
                                    }
                                />
                            </div>
                        </div>
                        {errors.registrationFee && (
                            <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.registrationFee.message}</p>
                        )}

                    </section>

                    <section>
                        <div className='p-2' >
                            <label htmlFor="activityFee" className='line-clamp-1 ml-.5 font-semibold text-[0.9rem] text-[#000000e8] mb-1 ' >activityFee</label>
                            <div style={{ border: "1px solid #4d26d7" }} className='flex justify-around items-center text-[gray] font-[500]   '>
                                <input type="number" placeholder='Eg.500' className='bg-transparent  text-[gray]  p-2 w-[100%] '
                                    {
                                    ...register('activityFee', {
                                        required: "Please Fill The activityFee"
                                    })
                                    }
                                />
                            </div>
                        </div>
                        {errors.activityFee && (
                            <p className="text-[.8rem] pl-2 font-semibold   " style={{ color: "red" }}  >{errors.activityFee.message}</p>
                        )}

                    </section>


                    <button type="submit" className="border-2 w-[98%] py-2 bg-purple-600 text-white mr-auto ml-auto block mt-2 hover:bg-[#330033] " >
                       Submit
                    </button>


                </form>
            </div>
        </section>
    )
}

export default FeeTableModel