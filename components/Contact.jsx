"use client";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact" className="w-full py-16 px-2">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 text-black dark:text-white">Let&apos;s Work Together</h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left — intro */}
          <div className="flex flex-col gap-6">
            <div className="shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-6 bg-white dark:bg-[#1a1a1a]">
              <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">Virtual Vince</h3>
              <p className="text-[#5651e5] text-sm uppercase tracking-widest mb-4">
                Freelance Software Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Looking to build or improve your online presence? Book a free
                30-minute call and let&apos;s talk through what you need.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  Available for new projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5651e5] inline-block"></span>
                  Websites &amp; web apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5651e5] inline-block"></span>
                  Shopify &amp; WordPress builds
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5651e5] inline-block"></span>
                  Server setup &amp; deployment
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-6 bg-white dark:bg-[#1a1a1a]">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Find me online
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/vincente-sequeira-1824b4245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e5] dark:hover:text-[#7c78ff] transition-colors duration-200"
                >
                  <FaLinkedinIn size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/VirtualVince"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e5] dark:hover:text-[#7c78ff] transition-colors duration-200"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.youtube.com/@vssincorporated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e5] dark:hover:text-[#7c78ff] transition-colors duration-200"
                >
                  <FaYoutube size={18} />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right — Calendly inline embed */}
          <div className="lg:col-span-2 shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl overflow-hidden">
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/virtualvince2020/30min?hide_gdpr_banner=1&primary_color=3e37ff"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;