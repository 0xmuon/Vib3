import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router';


import Reactt, { useState, useEffect } from 'react';
import './BlogPostCard.scss'; // Import your SCSS file

const BlogPostCard = () => {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove); // Cleanup
  }, []);

  useEffect(() => {
    const animate = () => {
      setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
      setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
      requestAnimationFrame(animate);
    };

    animate();

    return () => requestAnimationFrame.cancel(); // Cleanup
  }, [tgX, tgY]); // Only re-run when target coordinates change

  
  return (
    <div className="interactive" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0
              ?
              <>
                {getAllBlog.map((item, index) => {
                  const { thumbnail, id, date } = item
                  console.log(item)
                  return (
                    <div className="p-4 md:w-1/3" key={index}>
                      <div
                        style={{
                          background: mode === 'dark'
                            ? 'rgb(0, 0, 0)'
                            : 'Black',
                          borderBottom: mode === 'dark'
                            ?
                            ' 4px solid rgb(0, 0, 0)'
                            : ' 4px solid rgb(0, 0, 0)'
                        }}
                        className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                        ${mode === 'dark'
                            ? 'black'
                            : 'black'
                            } 
                        rounded-xl overflow-hidden`} 
                      >
                        {/* Blog Thumbnail  */}
                        <img onClick={() => navigate(`/bloginfo/${id}`)} className=" w-full" src={thumbnail} alt="blog" />

                        {/* Top Items  */}
                        <div className="p-6">
                          {/* Blog Date  */}
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                            color: mode === 'dark'
                              ? 'rgb(0, 0, 0)'
                              : ' rgb(0, 0, 0)'
                          }}>
                            {date}
                          </h2>

                          {/* Blog Title  */}
                          <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(0, 0, 0)'
                              : ' rgb(30, 41, 59)'
                          }}>
                            {item.blogs.title}
                          </h1>

                          {/* Blog Description  */}
                          <p className="leading-relaxed mb-3" style={{
                            color: mode === 'dark'
                              ? 'rgb(0, 0, 0)'
                              : ' rgb(0, 0, 0)'
                          }}>
                            Blog Description
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
              :
              <>
                <h1 className='exo-2 whie'>I guess it's gonna take a while,QUALITY over QUANTITY :|</h1>
              </>
            }
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 226, 226)'
                  : 'rgb(0, 0, 0)',
                color: mode === 'dark'
                  ?
                  'rgb(0, 0, 0)'
                  : 'rgb(226, 232, 240)'
              }}>
              If not Bored
            </Button>
          </div>
        </div>
      </section >
    </div>
  );
};

export default BlogPostCard;