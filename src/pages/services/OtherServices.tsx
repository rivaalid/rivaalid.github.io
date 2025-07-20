import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Search, Share2, ArrowRight } from 'lucide-react';

const OtherServices = () => {
  const services = [
    {
      icon: Palette,
      title: 'Branding & Graphic Design',
      description: 'Complete brand identity solutions including logo design, visual identity, and marketing materials that make your business stand out.',
      features: [
        'Logo Design & Brand Identity',
        'Business Card & Stationery Design',
        'Marketing Materials & Brochures',
        'Social Media Graphics',
        'Brand Guidelines & Style Guides',
        'Print & Digital Design'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Search,
      title: 'SEO & Content Marketing',
      description: 'Boost your online visibility with strategic SEO optimization and high-quality content that drives organic traffic and engagement.',
      features: [
        'Technical SEO Audits',
        'Keyword Research & Strategy',
        'Content Creation & Optimization',
        'Link Building Campaigns',
        'Local SEO Services',
        'Analytics & Reporting'
      ],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategy and management to build your brand presence and engage with your target audience effectively.',
      features: [
        'Social Media Strategy Development',
        'Content Planning & Creation',
        'Community Management',
        'Paid Social Advertising',
        'Influencer Partnerships',
        'Performance Analytics'
      ],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const additionalServices = [
    'Digital Marketing Strategy',
    'Email Marketing Campaigns',
    'Conversion Rate Optimization',
    'UX/UI Design Consulting',
    'Website Maintenance & Support',
    'E-commerce Solutions',
    'Mobile App Development',
    'Digital Analytics & Reporting'
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Services
              </span>{' '}
              to Support Your Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions beyond development to help your business thrive in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20 rounded-xl`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              More ways we can help your business succeed in the digital world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Collaborative Approach</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work closely with you to understand your goals and deliver results that exceed expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We begin by understanding your business, goals, and target audience to develop a comprehensive strategy.'
              },
              {
                step: '02',
                title: 'Design & Development',
                description: 'Our creative team brings your vision to life with stunning designs and robust functionality.'
              },
              {
                step: '03',
                title: 'Launch & Optimize',
                description: 'We launch your project and continuously optimize based on performance data and user feedback.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our professional services can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
              >
                Start Your Project
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OtherServices;