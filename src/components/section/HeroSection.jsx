import { useTheme } from "../../context/ThemeContext"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import me from '../../assets/profile.jpg'
import { motion } from 'motion/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin (ScrollTrigger)

const HeroSection = () => {
    
  const {isDarkMode , toggleDarkMode}=useTheme ();
 const rightRef = useRef(null);
 const leftREf = useRef (null)
//  const containerRef = useRef (null)

 useEffect (()=>{
  const ctx =gsap.context(()=>{
      
    gsap.from(rightRef.current,{
      opacity: 0,
      x: -100,
      duration: 0.8,
  
    })

    gsap.from(leftREf.current,{
      opacity: 0,
      x: 100,
      duration: 0.8,
  
    })

 })
  return ()=>ctx.revert()
 },[])





  return (
     <section className={`h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>

              {/* container div  */}
             <div  className={`max-w-7xl h-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4`}>
                   
                   {/* right section  */}
                  <div  ref={rightRef} className={``}>
                        <p className={`text-sm text-center md:text-left mb-8  md:mb-10 uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-950'} `}>Fron-end  Devloper</p>

                        <h1 className={`  text-5xl md:text-6xl ${isDarkMode ? 'text-white' : 'text-black'}`}> Building digital</h1>
                        <h1 className="text-5xl my-4 md:my-6  md:text-5xl text-blue-400 font-semibold"> experiences</h1>

                        <h1 className={`text-5xl md:text-6xl ${isDarkMode ? 'text-white ' : 'text-gray-950'}`}> that matter</h1>

                        <p className={`text-sm md:text-lg  my-10    w-80 md:max-w-[30rem] uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-950'} `}>I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.</p>
                        
                        <div className="flex  gap-5">
                            <motion.button 
                            whileHover={{y: -4}}
                            className=" text-lg text-white  bg-blue-500 rounded-full py-1 px-3 hover:bg-blue-400 transition-all duration-200 ">Download CV</motion.button>
                            <motion.button 
                            whileHover={{y: -4}}
                            className={`bg-transparent border px-2  rounded-full py-1 ${isDarkMode ? 'text-white border-gray-300' : 'text-gray-900 border-gray-950'} hover:bg-blue-500 transition-all duration-300 hover:border-none `}>GET IN TOUCH</motion.button>
                        </div>

                        {/* social icons  */}
                        <div className="flex  my-15 gap-10 mx-1">
                           <a href="https://github.com/settings/profile"> <FiGithub className={`h-5 w-5 hover:text-blue-500 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-950'}`}/></a>

                            <a href="https://www.linkedin.com/in/mohammad-naushad-a7642124a/"> <FiLinkedin className={`h-5 w-5 hover:text-blue-500 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-950'}`}/> </a>

                           <a href="https://x.com/nkkhan74388315"> <FiTwitter className={`h-5 w-5 hover:text-blue-500 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-950'}`}/></a>
                        </div>
                  </div>
                  

                  {/* left section  */}
                  <div ref={leftREf} className={`mt-25 md:mt-0`}>
                         {/* outer container div */}
                           <div className={`hidden md:flex  gap-10 ml-30 ${isDarkMode ? 'text-gray-300' : 'text-gray-950'}`}>
                                  <h4>React</h4>
                                  <h4>Tailwind</h4>
                                  <h4>Motion</h4>
                                  <h4>Gsap</h4>
                             </div>

                         <div className={`relative h-80 w-80 flex md:h-150 md:w-150 items-center justify-center `}>
                             
                             

                             
                            <motion.div
                            animate = {{rotate: 360}}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                            className={`absolute z-15 h-70 w-30 md:h-150 md:w-80 rounded-lg md:rounded-3xl border bg-transparent ${isDarkMode ? 'border-blue-300' : 'border-gray-950/60'}`}>
                              
                            </motion.div>

                            <motion.div 
                            animate={{
                              rotate: -360,
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                            className={`absolute z-20 h-70 w-30 md:h-150 md:w-80 border rounded-lg md:rounded-3xl bg-transparent ${isDarkMode ? 'border-blue-400' : 'border-gray-300'} `}>

                            </motion.div>

                            <div className=" z-10 h-50 w-35 md:h-100 md:w-90 overflow-hidden rounded-lg border border-gray-400/30 shadow-xl">
                               <div className="h-full w-full">
                                 <img
                                 className="h-full w-full border-2 border-gray-400 rounded-2xl object-cover"
                                 src={me} alt="me" />
                               </div>

                            </div>

                           
                         </div>
                         
                  </div>




             </div>
     </section>
  )
}

export default HeroSection