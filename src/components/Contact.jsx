import React from 'react';
import { SocialIcon } from 'react-social-icons';

function ContactDetail({ href, iconSrc, alt, label }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-3 hover:underline text-base md:text-lg"
    >
      <img src={iconSrc} alt={alt} className="w-6 h-6 md:w-8 md:h-8" />
      <span>{label}</span>
    </a>
  );
}

export function Contact() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section
      id="contact"
      className="py-12 bg-gray-900 text-white text-center mx-auto px-4 sm:px-6 md:px-8 md:w-[650px]"
    >
  
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Contact Me</h2>

      <div className="mb-8">
        <ContactDetail
          href="mailto:gowdamanohar45@gmail.com?subject=Hello"
          iconSrc="https://static.vecteezy.com/system/resources/previews/022/484/516/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
          alt="Gmail Icon"
          label="gowdamanohar45@gmail.com"
        />
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <SocialIcon
          url="https://github.com/Manohar-gowda"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 duration-300"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/manohar-gowda-24a64b255/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 duration-300"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          url="https://x.com/Manohar61756726"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 duration-300"
          style={{ height: 50, width: 50 }}
        />
      </div>
    </section>
    </div>
    
  );
}
