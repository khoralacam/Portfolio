import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { BiCodeAlt, BiDetail } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { isDarkMode } = useTheme();

  
  const maincontainerRef = useRef(null);
  const secondRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const frontendRefs = useRef([]);
  const backendRefs = useRef([]);

  
  frontendRefs.current = [];
  backendRefs.current = [];

  const addToFrontendRefs = (el) => {
    if (el && !frontendRefs.current.includes(el)) {
      frontendRefs.current.push(el);
    }
  };

  const addToBackendRefs = (el) => {
    if (el && !backendRefs.current.includes(el)) {
      backendRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondRef.current,
          start: "top 80%",    
          end: "bottom 30%",   
          scrub: 1,            
        },
      });

      
      
      tl.from(leftRef.current, { opacity: 0, x: -60, duration: 1 })
        .from(rightRef.current, { opacity: 0, x: 60, duration: 1 }, "<");

      frontendRefs.current.forEach((bar) => {
        tl.from(bar, { width: "0%", opacity: 0, duration: 0.4 });
      });

    
      backendRefs.current.forEach((bar) => {
        tl.from(bar, { width: "0%", opacity: 0, duration: 1 });
      });

    }, secondRef);

    return () => ctx.revert();
  }, []);

  const frontendSkills = [
    { label: "HTML5", percentage: "90%", color: "bg-amber-600" },
    { label: "CSS", percentage: "85%", color: "bg-blue-800" },
    { label: "Javascript", percentage: "90%", color: "bg-amber-300" },
    { label: "React", percentage: "75%", color: "bg-blue-500" },
    { label: "Tailwind", percentage: "90%", color: "bg-cyan-400" },
    { label: "Framer Motion", percentage: "80%", color: "bg-fuchsia-700" },
    { label: "GSAP", percentage: "85%", color: "bg-green-400" }
  ];

  const backendSkills = [
    { label: "Node js", percentage: "60%", color: "bg-emerald-400" },
    { label: "Express js", percentage: "55%", color: "bg-blue-600" },
    { label: "Rest APIs", percentage: "65%", color: "bg-amber-300" },
    { label: "Deployment", percentage: "40%", color: "bg-red-500" },
    { label: "Authentication (JWT)", percentage: "50%", color: "bg-blue-400" },
    { label: "MongoDB", percentage: "55%", color: "bg-emerald-600" },
    { label: 'Basic system design', percentage: '60%', color: 'bg-amber-700'}
  ];

  return (
    <section ref={maincontainerRef} className={`py-20 min-h-screen w-full overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      
      <div className="mb-10">
        <p className={`text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>technical expertise</p>
        <h1 className={`text-center my-4 text-3xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-950'}`}>
          Skills & Technologies
        </h1>
      </div>

      <div ref={secondRef} className="max-w-7xl mx-auto gap-8 md:gap-20 flex flex-col md:flex-row items-start justify-between px-4">
        
        {/* Frontend Section */}
        <div ref={leftRef} className={`w-full md:w-1/2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-xl px-6 py-8 shadow-md`}>
          <div className="flex gap-4 mb-6">
            <div className="flex text-blue-500 text-2xl h-12 w-12 bg-blue-500/10 rounded-lg items-center justify-center">
              <BiCodeAlt />
            </div>
            <div>
              <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-950'}`}>Frontend</h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Crafting beautiful responsive user interfaces</p>
            </div>
          </div>

          {frontendSkills.map((skill, index) => (
            <div key={index} className="mt-4">
              <div className={`flex justify-between font-medium text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>{skill.label}</div>
                <div>{skill.percentage}</div>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2 mt-1.5 overflow-hidden">
                <div 
                  ref={addToFrontendRefs} 
                  style={{ width: skill.percentage }} 
                  className={`h-full rounded-full ${skill.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Backend Section */}
        <div ref={rightRef} className={`w-full md:w-1/2 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-xl px-6 py-8 shadow-md`}>
          <div className="flex gap-4 mb-6">
            <div className="flex text-emerald-500 text-2xl h-12 w-12 bg-emerald-500/10 rounded-lg items-center justify-center">
              <BiDetail />
            </div>
            <div>
              <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-950'}`}>Backend</h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Currently Learning & Building</p>
            </div>
          </div>

          {backendSkills.map((skill, index) => (
            <div key={index} className="mt-4">
              <div className={`flex justify-between font-medium text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>{skill.label}</div>
                <div>{skill.percentage}</div>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2 mt-1.5 overflow-hidden">
                <div 
                  ref={addToBackendRefs} 
                  style={{ width: skill.percentage }} 
                  className={`h-full rounded-full ${skill.color}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;