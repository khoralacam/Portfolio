import { useTheme } from "../../context/ThemeContext"
import { BiHeart } from "react-icons/bi";
import { GiCoffeeCup } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";

import { LuCodeXml } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CloudSnow, Rocket } from "lucide-react";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const {isDarkMode , setIsDarkMode} = useTheme()
    const containerRef = useRef(null)
    const leftRef = useRef (null)
    const rightRef = useRef(null)
    const myRef = useRef (null)
    const myfirstRef= useRef(null)
    const mysecondRef = useRef(null)
    const mythirdRef =useRef(null)
    const box1 = useRef (null)
    const box2 = useRef (null)
    const box3 = useRef (null)


   useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "+=1000",
          toggleActions: 'play none none reverse'
          
        },
      });

      tl.from(myRef.current, {
        opacity: 0,
        y: -200,
      
        duration: 2,
      },).from(myfirstRef.current, {
        opacity: 0,
        y: -200,
        duration: 0.8,
      },).from(mysecondRef.current,{
        opacity: 0,
        y: -200,
        duration: 0.8,
      }).
      from(mythirdRef.current,{
        opacity: 0,
        y: -200,
        duration: 0.8,
      }).from(box1.current,{
        opacity: 0,
        y: -200,
        duration: 0.6,
      }).from(box2.current,{
        opacity: 0,
        y: -200,
        duration: 0.6,
      }).from(box3.current,{
        opacity: 0,
        y: -200,
        duration: 0.6,
      })







    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <section ref={containerRef} className={`h-[300vh] md:h-[150vh] ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>

               <div className="pt-[70rem] md:pt-[20rem]">
                    <p className={`text-sm text-center uppercase ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                              Get to know Me
                            </p>
                     <h1 className={`text-4xl text-center my-2 md:text-5xl ${isDarkMode ? 'text-gray-200 ' : 'text-gray-950'}`}>About <span className="text-blue-500"> Me </span></h1>
               </div>
            

           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-15 my-10 ">
           
           <div ref={myRef} className=" mx-2 my-4">
                  <div className={`flex  px-4 py-2 flex-col rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} `} >
                     <h1 className={`text-4xl md:text-5xl ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} my-2 `}>My Mission</h1>

                     <div className="my-4 md:my-2">
                         <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-950 my-4'}`}>I believe technology should be a bridge that connects people and solves real-world problems. My passion lies in crafting digital experiences that are not just function, but delightful and accessible to everyone.</p>
                     </div>

                     <div className="my-4 md:my-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-950 my-4'}`}>
                        When I'm not coding, you'll find me exploring new framerwroks, constributing to open source, or mentoring aspring developers. I love the constant evolution of web technologies and the endless possibilities they bring to create meaningful digital experiences
                      </p>
                     </div>
                  </div>
                    
                     {/* downsection  */}
                  <div  className="my-8">
                       <h1 className={` text-3xl md:text-5xl font-semibold ${isDarkMode ? 'text-gray-200 ' : 'text-gray-950'}`}>What I Love Building</h1>
                        <div>
                                {/* first down */}
                               <div ref={myfirstRef} className={` rounded-lg px-2  py-4 flex gap-4 my-8  ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                                    <div>
                                       <BiHeart className="text-2xl text-blue-500 my-1 "/>
                                    </div>
                                    <div>
                                       <h1 className={`text-xl mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>User Experience</h1>
                                       <p   className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>
                                        Crafting intuitive intercaces that users love 
                                       </p>
                                    </div>
                               </div>
                               
                               {/* second downsection */}
                                <div ref={mysecondRef} className={` rounded-lg px-2  py-4 flex gap-4 my-8  ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                                    <div>
                                       <GiCoffeeCup className="text-2xl text-blue-500 my-1 "/>
                                    </div>
                                    <div>
                                       <h1 className={`text-xl mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>Problem Solving</h1>
                                       <p   className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>
                                        Turing complex challenges into elegant solutions 
                                       </p>
                                    </div>
                               </div>

                               {/* third section  */}
                                <div ref={mythirdRef} className={` rounded-lg px-2  py-4 flex gap-4 my-8  ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                                    <div>
                                       <IoBookOutline className="text-2xl text-blue-500 my-1 "/>
                                    </div>
                                    <div>
                                       <h1 className={`text-xl mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>Continous Learning</h1>
                                       <p   className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-950'} `}>
                                        Always exploring new technologies and best practices
                                       </p>
                                    </div>
                               </div>
                        </div>

                  </div>
           </div>

           <div>
                  <div className="mx-4">
                       <h1 className= {`text-3xl md:text-5xl ${isDarkMode ? 'text-gray-200' : 'text-gray-950'}`}> My Developer Journey</h1>
                  </div>
               <div className="flex gap-4"> 
                               
                  
                   {/* left section  */}
                   <div ref={leftRef} className="relative flex flex-col  top-0   my-8 mx-4">
                  {/* Vertical Line */}
                    `  <div className=" absolute z-0 mx-4 top-0 h-full w-px -translate-x-1/2 bg-gray-500"></div>

                      {/* Icons */}

                      <div className="absolute z-10  flex flex-col  gap-55 md:gap-55 ">

                     
                      <div className=" h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <LuCodeXml className="text-2xl text-white" />
                      </div>

                      <div className=" h-10 w-10 bg-fuchsia-600 rounded-full flex items-center justify-center">
                        <MdCastForEducation className="text-2xl text-white" />
                      </div>

                      <div className=" h-10 w-10 bg-amber-400 rounded-full flex items-center justify-center">
                        <Rocket className="text-black" />
                    </div>
                  </div>

               </div>
`           
            {/* right section  */}
             <div ref={rightRef}>
                   <div ref={box1} className={`border rounded-lg p-3 mt-8 mx-3 ${isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-gray-50 border-gray-800 text-gray-950'}`}>
                          <div className="flex justify-between">
                                 <h1 className="text-2xl font-semibold">Started Coding Journey</h1>
                                  <p className="text-sm">2022</p>
                          </div>
                          <div>
                               <p className="pb-2"> <span className="text-blue-500 ">self-taught</span> </p>
                               Began learning web development with HTML CSS, and JavaScript Bult my first website and fell in love with creating digital experiences
                          </div>      
                   </div>

                    <div ref={box2} className={`border rounded-lg p-3 mt-8 mx-3 ${isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-gray-50 border-gray-800 text-gray-950'}`}>
                          <div className="flex justify-between">
                                 <h1 className="text-2xl font-semibold">Bachelor of Computer Applications</h1>
                                  <p className="text-sm"> 2022-2025</p>
                          </div>
                          <div>
                               <p className="pb-2"> <span className="text-blue-500 ">Dr. Bhimrao Ambedkar University</span> </p>
                              Completed my BCA with a strong focus on computer fundamentals, programming, and software development while building a solid foundation for a career in web development.
                          </div>      
                   </div>

                    <div ref={box3} className={`border rounded-lg p-3 mt-8 mx-3 ${isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-200' : 'bg-gray-50 border-gray-800 text-gray-950'}`}>
                          <div className="flex justify-between">
                                 <h1 className="text-2xl font-semibold">Frontend Developer</h1>
                                  <p className="text-sm">2025</p>
                          </div>
                          <div>
                               <p className="pb-2"> <span className="text-blue-500 ">looking jobs</span> </p>
                             Passionate Frontend Developer with a strong interest in creating responsive, interactive, and user-focused web applications using modern frontend technologies.
                          </div>      
                   </div>
             </div>


               </div>
           </div>




           </div>

    </section>
  )
}

export default About