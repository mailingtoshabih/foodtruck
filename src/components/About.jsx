import spoon from '../assets/spoon.png'



export const About = () => {



    return (
        <div className='mt-20 w-full bg-[#F8F8F8] flex justify-center font-poppins'>


            <div className='hidden lg:flex h-screen items-center mx-5 w-1/2 shrink-0'>
                <img className='w-[364px] mx-auto' src={spoon} alt="" />
            </div>




            <div className='p-10 flex h-screen items-center justify-center lg:w-2/3 mx-auto text-center lg:text-start'>

                <div className='mx-auto space-y-10'>

                    <p className='text-3xl md:text-3xl lg:text-4xl font-semibold text-[#0E2368]'>
                        About Us
                    </p>

                    <p className='text-md font-[#444957]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </p>

                    <button className='px-4 py-2 text-sm text-white font-semibold bg-[#E23744] rounded-full'>
                        Read more
                    </button>

                </div>

            </div>






        </div>
    )
}
