import React from 'react';

// Reusable FormInput component
const FormInput = ({ type, name, placeholder, iconPath, required = false, pattern }) => (
  <div className="group relative">
    <label htmlFor={name} className="sr-only">{placeholder}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      className="w-full px-4 py-3 bg-navy-700 text-white rounded-lg border border-white/10 
               focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all 
               duration-300 group-hover:border-primary/50"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
               group-focus-within:text-primary transition-colors duration-300"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {iconPath}
    </svg>
  </div>
);

// Social Icon component
const SocialIcon = ({ network, href }) => {
  const icons = {
    twitter: (
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    ),
    linkedin: (
      <>
        <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM5 8H0v16h5V8Zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8Z"/>
      </>
    ),
    github: (
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z"/>
    )
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
      aria-label={`Visit our ${network} profile`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        {icons[network]}
      </svg>
    </a>
  );
};

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration Section */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-float delay-500"></div>

            <div className="relative z-10">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 600 400" 
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                aria-hidden="true"
              >
                {/* Animated message bubbles */}
                <rect x="240" y="160" width="120" height="40" rx="10" fill="#4A5568">
                  <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
                </rect>
                <rect x="240" y="220" width="100" height="40" rx="10" fill="#4A5568">
                  <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </rect>
                <rect x="240" y="280" width="140" height="40" rx="10" fill="#4A5568">
                  <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" begin="1s"/>
                </rect>
              </svg>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-navy-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Have a project in mind or just want to say hello? 
                Fill out the form and we'll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                type="text"
                name="name"
                placeholder="Full Name"
                required
                pattern="^[a-zA-Z ]+$"
                iconPath={
                  <g>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </g>
                }
              />

              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                iconPath={
                  <g>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </g>
                }
              />

              <div className="group relative">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-navy-700 text-white rounded-lg border border-white/10 
                           focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all 
                           duration-300 group-hover:border-primary/50"
                ></textarea>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="absolute right-4 top-4 text-gray-400 group-focus-within:text-primary 
                           transition-colors duration-300"
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-primary to-cyan-600 text-white 
                         font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 
                         flex items-center justify-center space-x-2 transform active:scale-95"
              >
                <span>Send Message</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>

            <div className="mt-8 flex justify-center space-x-6">
              {['twitter', 'linkedin', 'github'].map((network) => (
                <SocialIcon 
                  key={network}
                  network={network}
                  href="#"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
