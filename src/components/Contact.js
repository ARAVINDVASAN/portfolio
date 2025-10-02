import React, { useState,useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone,  FaPaperPlane, FaGithub, FaLinkedin, } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
    const formRef = useRef(null); // create the ref


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'aravindvasan33@gmail.com',
      href: 'mailto:aravindvasan33@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9445937148',

      href: 'tel:+919445937148'
    },
   
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ARAVINDVASAN', color: 'hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aravind-s-13b111224/', color: 'hover:text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_9i6whoj','template_gbtxaiu', formRef.current, 'qD7zLT9FA1Dl8ESH5')
      .then(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Message sent successfully!');

      }, (error) => {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-800 via-black to-dark-900 relative">
      {/* Dark theme background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="gradient-text-cyber">Get In Touch</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question,
                want to work together, or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.05, x: 10, rotateY: 5 }}
                  className="flex items-center gap-6 p-6 glass-effect rounded-2xl card-hover group shimmer-effect relative overflow-hidden"
                >
                  <motion.div 
                    className="text-3xl gradient-text-cyber group-hover:animate-pulse"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <info.icon />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{info.title}</h4>
                    <p className="text-gray-300 text-base">{info.value}</p>
                  </div>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl text-gray-500 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-xl"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">
              Send a Message
            </motion.h3>

            <motion.form variants={itemVariants}  ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
