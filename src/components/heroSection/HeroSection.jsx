import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#000000' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://gcdnb.pbrd.co/images/VHJfkiB8UqNF.png?o=1" alt="" classname="parallelex" />
                            </div>
                            <img src="https://icon2.cleanpng.com/20240312/be/transparent-headphones-rainbow-headphones-colorful-headphones-colorful-rainbow-headphones-on-black-1710840770575.webp" alt="/>

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'><p  className="gradient">VIB3 | VIBE WHILE LEARNING</p></h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            RECENTLY PUBLISHED BLOGS
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection