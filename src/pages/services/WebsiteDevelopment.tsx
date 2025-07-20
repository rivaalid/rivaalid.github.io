import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap, Shield, Search, Palette } from 'lucide-react';

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built from scratch to meet your specific requirements'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive layouts that work perfectly on all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with advanced caching and performance techniques'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable hosting solutions'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Search engine friendly structure to improve your online visibility'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Stunning visual designs that reflect your brand and engage users'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes and high-fidelity prototypes that visualize your website before development.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Clean, efficient code is written and thoroughly tested across different devices and browsers for optimal performance.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'We deploy your website to production and provide ongoing support to ensure everything runs smoothly.'
    }
  ];

  const websiteTypes = [
    'Corporate Websites',
    'E-commerce Stores',
    'Landing Pages',
    'Portfolio Sites',
    'Blog Platforms',
    'Web Applications'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Website Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creative, Fast, and SEO-Friendly websites that drive results for your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Get a Quote for Your Website
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Approach to Website Creation</h2>
              <p className="text-gray-300 text-lg mb-6">
                We believe every business deserves a website that not only looks amazing but performs exceptionally. 
                Our team combines creative design with cutting-edge technology to deliver websites that engage users 
                and drive conversions.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                From initial concept to final launch, we work closely with you to ensure your website reflects your 
                brand identity and meets your business objectives. Our mobile-first approach guarantees your site 
                looks perfect on every device.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {websiteTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Website Development Process"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our Development Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver websites that combine beautiful design with powerful functionality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven workflow that ensures quality results and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a website that drives results for your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Get a Quote for Your Website
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WebsiteDevelopment;