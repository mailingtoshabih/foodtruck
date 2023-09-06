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

                    <p className='mt-20 lg:mt-36 w-fit text-4xl lg:text-4xl xl:text-8xl font-bold text-[#0E2368]'>
                        Discover the <br />
                        <span className='text-[#E23744]'>
                            Best
                        </span>
                        &nbsp;Food <br /> and Drinks
                    </p>

                    <p className='text-[#444957] text-2xl'>
                        Naturally made Healthcare Products for the <br /> better care & support of your body.
                    </p>

                    <button className='px-8 py-4 text-2xl text-white font-semibold bg-[#E23744] rounded-full'>
                        Explore Now!
                    </button>

                </div>





                {/* -----------------------------Hero Image------------------ */}



                <div className='w-full md:w-fit'>

                    <div className='relative'>
                        <img src={pizza} alt=""  className='w-[900px]'/>
                        <img className='absolute top-0 w-[1000px]' src={red} alt="" />

                        <button className='absolute text-white text-lg font-semibold px-4 py-2 top-10 right-10 border-4 border-white rounded-full'>
                            Get In Touch
                        </button>
                    </div>

                </div>





                {/* smaller screen hero section */}

                <div className='block md:hidden text-center space-y-10'>

                    <p className='mt-20 text-6xl lg:text-7xl font-bold text-[#0E2368]'>
                        Discover the <br />
                        <span className='text-[#E23744]'>
                            Best
                        </span>
                        &nbsp;Food <br /> and Drinks
                    </p>

                    <p className='text-[#444957] text-xl'>
                        Naturally made Healthcare Products for the <br /> better care & support of your body.
                    </p>

                    <button className='px-8 py-6 text-xl text-white font-semibold bg-[#E23744] rounded-full'>
                        Explore Now!
                    </button>

                </div>




            </div>


        </div>
    )
}
