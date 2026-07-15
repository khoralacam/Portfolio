import { useTheme } from "../../context/ThemeContext"
import { FiGithub , FiTwitter , FiLinkedin , FiInstagram } from "react-icons/fi"

const Footer = () => {
    const {isDarkMode , setIsDarkMode} = useTheme()

  return (
    <section className={`h-[70vh]  ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}> 
               
               
                       <div className=" pt-0 md:pt-[10rem] mx-2 ">
                           <div className={`border-t py-40 ${isDarkMode ? 'border-gray-800'  : 'border-gray-950'}`}>
                            <h1 className={`text-3xl text-center font-semibold ${isDarkMode ? 'text-gray-200 ' :'text-gray-950'}`}> <span className="text-blue-500">Let's build something </span> amazing together</h1>

                            <p className={`text-sm text-center my-8 ${isDarkMode ? 'text-gray-200 ' :'text-gray-950'}`}>If you have a project in mind or are looking for a Frontend Developer, I'd love to hear from you.</p>
                          </div>
                            
                       </div>

                     
           
    </section>
  )
}

export default Footer