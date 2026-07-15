import { useTheme } from "../../context/ThemeContext";
import { FiNavigation, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead, MdOutlineAddIcCall } from "react-icons/md";
import { BiRadioCircleMarked } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { motion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const form = useRef(null);

  const service = "service_8aim33n";
  const template = "template_0ei6bd9";
  const fromcurrent = "dmtv0sI8g04HULcxh";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service, // Service ID
        template, // Template ID
        form.current,
        fromcurrent // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "+=1000",
          toggleActions: 'play none none reverse'
        },
      });

      tl.from(leftRef.current, {
        opacity: 0,
        x: -200,
        duration: 1,
      }).from(rightRef.current, {
        opacity: 0,
        x: 200,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`min-h-screen py-20 w-full ${isDarkMode ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-4 pt-[10rem] md:pt-[25rem] lg:pt-0 ">
        <p className={`text-sm text-center ${isDarkMode ? "text-gray-200" : "text-gray-950"} `}>
          Let's Connect
        </p>

        <h1 className={`text-4xl text-center md:text-5xl ${isDarkMode ? "text-gray-200" : "text-gray-950"} `}>
          Get In <span className="text-blue-500">Touch </span>
        </h1>

        <p className={`my-4 text-sm text-center max-w-xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-950"} `}>
          I'm always open to discussing new opportunities, freelance projects, or creative ideas. Let's connect and create something meaningful.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-7xl gap-12 h-full my-10 mx-auto items-start justify-center flex flex-col md:flex-row px-4">
        {/* left div */}
        <div ref={leftRef} className="w-full md:w-1/2 flex justify-end">
          <div className={`w-full max-w-xl rounded-2xl p-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-200"}`}>
            <div className={`my-4 text-3xl md:text-4xl ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}>
              <h1>Send me a message</h1>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col sm:flex-row gap-4 my-6">
                <div className={`rounded-lg w-full border ${isDarkMode ? "border-gray-500" : "border-gray-950"}`}>
                  <input
                    className={`text-sm w-full px-4 py-2 rounded-lg ${isDarkMode ? "text-gray-200 bg-gray-800" : "text-gray-950 bg-gray-50"}`}
                    placeholder="Your Name"
                    type="text"
                    name="from_name" // Ensure this matches your EmailJS template placeholder
                    id="name"
                    required
                  />
                </div>

                <div className={`rounded-lg w-full border ${isDarkMode ? "border-gray-500" : "border-gray-950"}`}>
                  <input
                    className={`text-sm w-full rounded-lg px-4 py-2 ${isDarkMode ? "text-gray-200 bg-gray-800" : "text-gray-950 bg-gray-50"}`}
                    placeholder="Your Email"
                    type="email"
                    name="from_email" // Ensure this matches your EmailJS template placeholder
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="my-4 w-full">
                <textarea
                  rows={4}
                  name="message" // Ensure this matches your EmailJS template placeholder
                  className={`w-full text-sm border rounded-lg px-4 py-2 ${isDarkMode ? "text-gray-200 bg-gray-800 border-gray-700" : "text-gray-950 bg-gray-50 border-gray-900"}`}
                  placeholder="Enter your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full my-5">
                <div className="flex gap-2 bg-blue-500 w-full py-2 hover:bg-blue-600 transition-all duration-300 rounded-lg items-center justify-center">
                  <span className="text-2xl text-white">
                    <FiNavigation />
                  </span>
                  <h1 className="text-lg text-white font-medium">Send Message</h1>
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* right div */}
        <div ref={rightRef} className="w-full md:w-1/2">
          <div className={`${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
            <h1 className="text-3xl md:text-4xl font-semibold">Contact Information</h1>
          </div>

          <div className={`my-5 px-4 py-4 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"}`}>
            < motion.div
            whileHover={{scale: 1.02}}
            className="flex gap-4">
              <div className={isDarkMode ? "text-gray-200" : "text-gray-950"}>
                <IoLocationSharp className="text-2xl mt-1" />
              </div>
              <div className={isDarkMode ? "text-gray-100" : "text-gray-950"}>
                <p className="text-xs text-gray-500">Location</p>
                <h1 className="font-semibold">Delhi NCR Shaheen Bagh</h1>
              </div>
            </motion.div>
          </div>

          <div className={`my-5 px-4 py-4 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"}`}>
            <motion.div 
            whileHover={{scale: 1.02}}
            className="flex gap-4">
              <div className={isDarkMode ? "text-gray-200" : "text-gray-950"}>
                <MdMarkEmailRead className="text-2xl mt-1" />
              </div>
              <div className={isDarkMode ? "text-gray-100" : "text-gray-950"}>
                <p className="text-xs text-gray-500">Email</p>
                <h1 className="font-semibold">nkk16608@gmail.com</h1>
              </div>
            </motion.div>
          </div>

          <div className={`my-5 px-4 py-4 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-100"}`}>
            <motion.div
            whileHover={{scale: 1.02}}
            className="flex gap-4">
              <div className={isDarkMode ? "text-gray-200" : "text-gray-950"}>
                <MdOutlineAddIcCall className="text-2xl mt-1" />
              </div>
              <div className={isDarkMode ? "text-gray-100" : "text-gray-950"}>
                <p className="text-xs text-gray-500">Phone No</p>
                <h1 className="font-semibold">+91 8780352181 / 7562963137</h1>
              </div>
            </motion.div>
          </div>

          {/* follow section */}
          <div className="mt-10 mx-2">
            <div className="my-6">
              <h1 className={`text-2xl font-medium ${isDarkMode ? "text-gray-200" : "text-gray-950"}`}>Follow Me</h1>
            </div>
            <div className="flex flex-wrap gap-4 my-4">
              <div className={`flex gap-2 items-center border px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 ${isDarkMode ? "border-gray-600 text-gray-200" : "border-gray-900 text-gray-950"}`}>
                <FiGithub className="text-xl" />
                <a target="_blank"rel="noopener noreferrer" href="https://github.com/khoralacam"><span className="text-lg">GitHub</span></a>
              </div>

              <div className={`flex gap-2 items-center border px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 ${isDarkMode ? "border-gray-600 text-gray-200" : "border-gray-900 text-gray-950"}`}>
                <FiLinkedin className="text-xl" />
                <a  target="_blank"rel="noopener noreferrer"href="https://www.linkedin.com/in/mohammad-naushad-a7642124a/"><span className="text-lg">LinkedIn</span></a>
              </div>

              <div className={`flex gap-2 items-center border px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 ${isDarkMode ? "border-gray-600 text-gray-200" : "border-gray-900 text-gray-950"}`}>
                <FiInstagram className="text-xl" />
                 <a target="_blank"rel="noopener noreferrer"href="https://www.instagram.com/khoralacam?utm_source=qr&igsh=MXV1OXF2YXc5NThlNA%3D%3D"><span className="text-lg">Instagram</span></a>
              </div>
            </div>

            <div className={`flex gap-3 my-6 ${isDarkMode ? "bg-gray-900" : "bg-green-50"} p-4 rounded-lg`}>
              <div>
                <BiRadioCircleMarked className="text-3xl text-green-600 animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg text-green-600 font-semibold">Available for work</h1>
                <p className={`my-1 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;