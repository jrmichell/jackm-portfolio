import { Link } from "react-scroll";
import ContactImg from "../assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Widget } from "@typeform/embed-react";

export default function Contact() {
  return (
    <div name="contact" className="w-full lg:h-screen z-100">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase py-4 text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Let&#39;s Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src={ContactImg}
                  alt="Contact Image"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
                <div>
                  <h2 className="py-2">Jack Michell</h2>
                  <p>Software Engineer</p>
                  <p className="py-4">
                    I am currently taking commissions. Contact me and let&#39;s
                    connect.
                  </p>
                </div>
                <div>
                  <p className="uppercase text-center pt-8 text-primary">
                    Connect With Me
                  </p>
                  <div className="flex items-center justify-evenly py-4">
                    <a
                      href="https://www.linkedin.com/in/jack-michell/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={20} />
                      </div>
                    </a>
                    <a
                      href="https://github.com/jrmichell"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <Widget
                id="Ip1URDkh"
                style={{ fontSize: 20 }}
                className="flex justify-center items-center shadow-gray-400 text-[#fff] p-4 text-gray-100 mt-4 w-full h-[620px] z-[-100]"
              >
                Let&#39;s Connect
              </Widget>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="hero" smooth={true} duration={300}>
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-primary" size={30} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
