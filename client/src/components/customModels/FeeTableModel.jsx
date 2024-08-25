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
            if (response?.data?.status === 200) {
                showModel();
            }

        } catch (error) {
            console.log(error);
        }
    }

    const updateFee = async (data) =>{
       try {
        const response = await axios.post('/api/admin/updateFeeTable', data);
        if (response?.data?.status === 200) {
            showModel();
        }
       } catch (error) {
        alert(error.message)
       }
    }

    return (
        <section className="h-full flex justify-center items-center fixed top-0 w-screen bg-[#00000038]   " >
            <div className="bg-[white] w-[95%] h-[90%] lg:w-[50%] lg:h-[40%] p-2 rounded-md shadow-lg " >
                <RxCross2 onClick={() => showModel()} className="cursor-pointer " />
                <form className="mt-4" >

                    <div>
                        <div className=" lg:flex  justify-around text-sm " >

                            <div>
                                <input
                                    type="text"
                                    placeholder="Program name"
                                    className={`border-2 p-1 my-2 w-full rounded-md ${errors.programName ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('programName', { required: 'Program name is required' })}
                                />
                                {errors.programName && <p className="text-red-500">{errors.programName.message}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="ageGroup"
                                    className={`border-2 p-1 w-full my-2 rounded-md ${errors.ageGroup ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('ageGroup', { required: 'Age Group is required' })}
                                />
                                {errors.ageGroup && <p className="text-red-500">{errors.ageGroup.message}</p>}
                            </div>

                            <div>
                                <input
                                    type="number"
                                    placeholder="Annual fee"
                                    className={`border-2 p-1 w-full my-2 rounded-md ${errors.annualFee ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('annualFee', { required: 'Age Group is required' })}
                                />
                                {errors.annualFee && <p className="text-red-500">{errors.annualFee.message}</p>}
                            </div>

                        </div>

                        <div className=" lg:flex justify-around lg:mt-4 text-sm " >

                            <div>
                                <input
                                    type="number"
                                    placeholder="Registration fee"
                                    className={`border-2 p-1 w-full my-2 rounded-md ${errors.registrationFee ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('registrationFee', { required: 'Age Group is required' })}
                                />
                                {errors.registrationFee && <p className="text-red-500">{errors.registrationFee.message}</p>}
                            </div>

                            <div>
                                <input
                                    type="number"
                                    placeholder="activityFee"
                                    className={`border-2 p-1 w-full my-2 rounded-md ${errors.activityFee ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register('activityFee', { required: 'Age Group is required' })}
                                />
                                {errors.activityFee && <p className="text-red-500">{errors.activityFee.message}</p>}
                            </div>


                        </div>
                    </div>

                    <div className="mt-[2rem] flex justify-center " >
                        <button onClick={handleSubmit(createFee)} className="w-[30%] block py-2 bg-[#8F5BFF] hover:bg-[#391b7a] mr-2 text-center rounded-md text-white text-sm " >
                            Create
                        </button>

                        <button onClick={handleSubmit(updateFee)} className="w-[30%] block py-2 bg-[#8F5BFF] hover:bg-[#391b7a] ml-2 text-center rounded-md text-white text-sm " >
                            Update
                        </button>
                    </div>



                </form>
            </div>
        </section>
    )
}

export default FeeTableModel

