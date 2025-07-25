import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- SVG Icons for Social Links ---
const LinkedInIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> );
const GitHubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const TwitterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> );
const MailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section id="contact" className="section">
      <motion.div
        ref={ref}
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', color: 'var(--text-primary)', textAlign: 'center' }}>
            Get In Touch
        </h2>
        <ul className="social-links-container">
            <li className="social-link-item">
              <a href="https://www.linkedin.com/in/priyatosh-k/" target="_blank" rel="noopener noreferrer">
                <div className="social-icon"><LinkedInIcon /></div>
                <span className="social-text">LinkedIn</span>
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://github.com/Priyatosh-kumar" target="_blank" rel="noopener noreferrer">
                <div className="social-icon"><GitHubIcon /></div>
                <span className="social-text">GitHub</span>
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://x.com/00priyatosh00" target="_blank" rel="noopener noreferrer">
                <div className="social-icon"><TwitterIcon /></div>
                <span className="social-text">Twitter</span>
              </a>
            </li>
             <li className="social-link-item">
              <a href="mailto:priyatoshkumar.dev@gmail.com">
                <div className="social-icon"><MailIcon /></div>
                <span className="social-text">Mail</span>
              </a>
            </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Contact;