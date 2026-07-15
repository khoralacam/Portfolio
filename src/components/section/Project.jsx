import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import e from "../../assets/e-commerce.png";
import { FiGithub } from "react-icons/fi";
import {motion } from 'motion/react'
import daskboad from '../../assets/daskboad.avif'
import appleLeanding from '../../assets/appleLeading.png'
import {gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin (ScrollTrigger)
  
const Project = () => {

  const secondContainerRef = useRef(null)
  const projectOne = useRef (null)
  const projectTwo = useRef (null)
  const projectThree = useRef (null)

  useEffect (()=>{
    const ctx = gsap.context(()=>{
       const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondContainerRef.current,
          start: 'top 80%',
          end: '+=1000',  
          toggleActions: 'play none none reverse'
        }
       });
       tl.from(projectOne.current,{
        opacity: 0,
        x: -100,
        duration: 1,
       },'<0.2').from(projectTwo.current,{
        opacity: 0,
        x: -100,
        duration: 1,
       },'<0.4').from(projectThree.current,{
        opacity: 0,
        x: -100,
        duration: 1,
       })
    },secondContainerRef)
       
      return ()=>ctx.revert()

  },[])






  const { isDarkMode, setIsDarkMode } = useTheme();
  const items = [
    "javaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "React js",
    "Tailwind",
    "Motion",
    "Gsap",
  ];
  return (
    <section  className={`h-[100vh]  ${isDarkMode ? "bg-gray-950" : "bg-white"}`}>
      <div className={`max-w-7xl h-full mx-auto flex flex-col  items-center justify-center  px-4`}
      >
        {/* upper section  */}
         
        <div className=" mt-[50rem] md:mt-[10rem] flex flex-col justify-center items-center">
          <h1
            className={`text-lg md:text-xl text-center my-4 md:my-10 ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}
          >
            Also Working With
          </h1>
          <div>
            <div className="grid grid-cols-4 md:flex gap-4 lg:gap-20  md:justify-center md:items-center">
              {items.map((items, index) => (
                <h3
                  className={`text-sm  md:text-sm text-center border rounded-full px-3  ${isDarkMode ? "text-gray-200 border-gray-200" : "text-gray-950 border-gray-950"}`}
                  key={index}
                >
                  {items}
                </h3>
              ))}
            </div>
          </div>
        </div>

        {/* down section  */}
        <div>
          <div className={`h-[30vh] mt-30 md:mt-20 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
            <p
              className={`text-sm  uppercase ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
            >
              featured work
            </p>

            <h1
              className={`text-3xl  mb-4 mt-2  md:text-6xl ${isDarkMode ? "text-gray-200 " : "text-gray-900"}`}
            >
              Recent <span className="text-blue-500">Projects</span>
            </h1>

            <p
              className={`text-sm  w-90 md:w-150 ${isDarkMode ? "text-gray-200 " : "text-gray-900"}`}
            >
              A collection of projects that showcase my expertise in building
              modern web applications and soloving complex problems.
            </p>
          </div>

          {/* projects section  */}
          <div className={`   md:my-20  `}>

            <div ref={secondContainerRef} className="grid grid-cols-1  lg:flex gap-8 mx-2 md:gap-8 ">

                {/* first projects  */}
              <motion.div
              ref={projectOne}
               whileHover={{scale: 1.02}}
              className={`rounded-lg border h-140 w-90 md:w-110 ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-200 border-gray-300"}`}
              >
                <div className=" h-70 w-90 md:h-80 md:w-110">
                        <img  className="h-full w-full rounded-lg" src={e} alt="e-commerce" />
                </div>
             

                <div className="mx-4 mt-4">
                  <h4
                    className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}
                  >
                    E-Commererce Platfrom{" "}
                  </h4>

                  <p
                    className={`text-sm my-4 ${isDarkMode ? "text-gray-200 " : "text-gray-950"}`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, nihil odio deleniti nemo aperiam rem facere fuga
                    quidem quos atque.
                  </p>
                </div>
                <div
                  className={` mx-4 mb-4 flex rounded-full text-sm text-center gap-4 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  <p> React js</p>
                  <p>Tailwind</p>
                  <p>Motion</p>
                  <p>GSAP</p>
                </div>
               

               <div className=" mx-4 flex gap-4 my-8">
                <motion.button
                whileHover={{y: -4}}
                className={`text-sm hover:bg-blue-500 transition-all duration-200 px-4 border rounded-full py-1 ${isDarkMode ? 'text-gray-200 border-gray-300' : 'text-gray-950 border-gray-950'}`}>Live demo</motion.button>
               
                 <motion.button
                 whileHover={{y: -4}}
                 className={`hover:text-blue-500 transition-all duration-200 px-2 text-2xl  py-1 ${isDarkMode ? 'text-gray-200 ' : 'text-gray-950 '}`}>
                  <FiGithub/>
                 </motion.button>
               
               </div>
              </motion.div>


                  {/* second project  */}

                <motion.div 
                ref={projectTwo}
                whileHover={{scale: 1.02}}
                className={`rounded-lg border h-140 w-90 md:w-110 ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-200 border-gray-300"}`}
              >
                <div className="h-70 w-90 md:h-80 md:w-110">
                <img className="h-full w-full rounded-lg" src={daskboad} alt="Daskboad" />
                   </div>
                <div className="mx-4 mt-4">
                  <h4
                    className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}
                  >
                    Daskboad
                  </h4>

                  <p
                    className={`text-sm my-4 ${isDarkMode ? "text-gray-200 " : "text-gray-950"}`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, nihil odio deleniti nemo aperiam rem facere fuga
                    quidem quos atque.
                  </p>
                </div>
                <div
                  className={` mx-4 mb-4 flex rounded-full text-sm text-center gap-4 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  <p> React js</p>
                  <p>Tailwind</p>
                  <p>Motion</p>
                  <p>GSAP</p>
                </div>
               

               <div className=" mx-4 flex gap-4 my-8">
                <motion.button
                whileHover={{y: -4}}
                className={`text-sm hover:bg-blue-500 transition-all duration-200 px-4 border rounded-full py-1 ${isDarkMode ? 'text-gray-200 border-gray-300' : 'text-gray-950 border-gray-950'}`}>Live demo</motion.button>
               
                 <motion.button
                 whileHover={{y: -4}}
                 className={`hover:text-blue-500 transition-all duration-200 px-2 text-2xl  py-1 ${isDarkMode ? 'text-gray-200 ' : 'text-gray-950 '}`}>
                  <FiGithub/>
                 </motion.button>
               
               </div>
              </motion.div>
  
                {/* third project  */}
                 <motion.div
                 ref={projectThree}
                 whileHover={{scale: 1.02}}
                 className={`rounded-lg h-140 w-90 md:w-110  border ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-gray-200 border-gray-300"}`}
              > 
              <div className="h-70 w-90 md:h-80 md:w-110">
                <img className="h-full w-full rounded-lg" src={appleLeanding} alt="AppleLeanding page" />
                </div>
                <div className="mx-4 mt-4">
                  <h4
                    className={`text-3xl md:text-4xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}
                  >
                    Apple Leanding Page{" "}
                  </h4>

                  <p
                    className={`text-sm my-4 ${isDarkMode ? "text-gray-200 " : "text-gray-950"}`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, nihil odio deleniti nemo aperiam rem facere fuga
                    quidem quos atque.
                  </p>
                </div>
                <div
                  className={` mx-4 mb-4 flex rounded-full text-sm text-center gap-4 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  <p> React js</p>
                  <p>Tailwind</p>
                  <p>Motion</p>
                  <p>GSAP</p>
                </div>
               

               <div className=" mx-4 flex gap-4 my-8">
                <motion.button
                whileHover={{y: -4}}
                className={`text-sm hover:bg-blue-500 transition-all duration-200 px-4 border rounded-full py-1 ${isDarkMode ? 'text-gray-200 border-gray-300' : 'text-gray-950 border-gray-950'}`}>Live demo</motion.button>
               
                 <motion.button
                 whileHover={{y: -4}}
                 className={`hover:text-blue-500 transition-all duration-200 px-2 text-2xl  py-1 ${isDarkMode ? 'text-gray-200 ' : 'text-gray-950 '}`}>
                  <FiGithub/>
                 </motion.button>
               
               </div>
              </motion.div>







            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
