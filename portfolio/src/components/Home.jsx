import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped} from "react-typed";

import pic from '../assets/photo.avif'


const Home = () => {


  
  return (<>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col sm:flex-row' >
      <div  className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>

      <span className='text-xl'>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
      <h1>Hello, I'am</h1>
      {/* <span className='text-red-700 font-bold'>Developer</span> */}
      <ReactTyped className='text-red-700 font-bold'
         
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>
      <br />
      
      <p className='text-md sm:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rerum atque! Impedit consequuntur rem molestias soluta tempora minus velit nemo, quae distinctio quos totam neque? Odit commodi aliquid unde, culpa eveniet, quia et est natus obcaecati ipsa dolores aperiam iusto.</p>
      
      <br />

      {/* Social media icons */}
      <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
      <div className='space-y-2'>
        <h1 className='font-bold text-center'>Avalibale on</h1>
        <ul className='flex space-x-5'>
          <li><a href='https://www.facebook.com/login/' target='_blank' >
            <FaFacebook className='text-2xl cursor-pointer'  />
            </a></li>

            <li><a href='https://in.linkedin.com/' target='_blank' >
            <FaLinkedin className='text-2xl cursor-pointer'  />
            </a></li>

            <li><a href='https://www.facebook.com/login/' target='_blank' >
            <BsTwitterX className='text-2xl cursor-pointer'  />
            </a></li>

            <li><a href='https://github.com/csubham2370' target='_blank' >
            <FaGithub className='text-2xl cursor-pointer'  />
            </a></li>

            


        </ul>
        
        </div>

         {/* skills */}
 

    
      <div className='space-y-2'>
        <h1 className='font-bold text-center'>Currently working on</h1>
        <ul className='flex space-x-5'>
          <li>{" "}<SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'  /></li>
          <li>{" "}< SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'  /></li>
          <li>{" "}<FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'  /></li>
          <li>{" "}<FaNodeJs   className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'  /></li>
        </ul>
        
        </div>
        </div> 


      
      
      </div>
      <div  className='md:w-1/2 md:ml-48 md:mt-20 mt:8 order-1'>
      
      <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] ' />
      
      
      </div>
      </div>
      
      </div>
      <hr />
      </>
  )
}

export default Home;