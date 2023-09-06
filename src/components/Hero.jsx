import truck from '../assets/truck.png'
import pizza from '../assets/pizza.png'
import red from '../assets/red.png'



export const Hero = () => {
    return (
        <div className=''>

            <div className='md:flex justify-between '>


                {/* large screen hero section */}

                <div className='hidden md:block pl-20 mr-10 w-1/2 space-y-8'>

                    <img className="my-10 lg:mb-32" 
                        src={truck} 
                        alt="logo" />

                    <p className='mt-20 lg:mt-36 w-fit text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0E2368]'>
                        Discover the <br />
                        <span className='text-[#E23744]'>
                            Best
                        </span>
                        &nbsp;Food <br /> and Drinks
                    </p>

                    <p className='text-[#444957] text-sm md:text-md'>
                        Naturally made Healthcare Products for the better care & support of your body.
                    </p>

                    <button className='px-4 py-2 text-sm text-white font-semibold bg-[#E23744] rounded-full'>
                        Explore Now!
                    </button>

                </div>





                {/* -----------------------------Hero Image------------------ */}



                <div className='w-full md:w-fit'>

                    <div className='relative'>
                        <img src={pizza} alt=""  className='w-full md:w-[600px]'/>
                        <img className='absolute top-0 w-full md:w-[600px]' src={red} alt="" />

                        <button className='absolute text-white text-sm px-3 py-2 top-8 right-8 border-2 border-white rounded-full'>
                            Get In Touch
                        </button>
                    </div>

                </div>





                {/* smaller screen hero section */}

                <div className='block md:hidden text-center space-y-10'>

                    <p className='mt-20 text-4xl lg:text-5xl font-bold text-[#0E2368]'>
                        Discover the <br />
                        <span className='text-[#E23744]'>
                            Best
                        </span>
                        &nbsp;Food <br /> and Drinks
                    </p>

                    <p className='text-[#444957]'>
                        Naturally made Healthcare Products for the <br /> better care & support of your body.
                    </p>

                    <button className='px-5 py-3 text-white font-semibold bg-[#E23744] rounded-full'>
                        Explore Now!
                    </button>

                </div>




            </div>


        </div>
    )
}
