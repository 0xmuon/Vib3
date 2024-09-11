import { Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import "./HeroSection.css";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <section
      style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#000000' }}>

      {/* Hero Section */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Main Content */}
        <main>
          <div className="text-center">
            <div className="mb-2">
              {/* Image */}
              <div className="flex justify-center">
                <img src="https://gcdnb.pbrd.co/images/VHJfkiB8UqNF.png?o=1" alt="" className="logo-img" />
              </div>

              {/* Text */}
              <h1 className='text-3xl text-white font-bold'>
                <p className="gradient"> VIB3 | Vibe While Learning</p>
              </h1>
              <p className="spacing"></p>             
              {/* Paragraph */}
              <p
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
                className="sm:text-3xl text-xl font-extralight sm:mx-auto exo-2">
                Newly Cooked Stuff
              </p>
            </div>
          </div>
          </main>
        </div>
    </section>
  );
}

export default HeroSection;