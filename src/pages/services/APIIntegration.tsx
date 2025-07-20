import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cog, Database, Cloud, Link } from 'lucide-react';

const APIIntegration = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline workflows by connecting different systems and eliminating manual tasks'
    },
    {
      icon: Database,
      title: 'Data Synchronization',
      description: 'Keep your data consistent across all platforms with real-time synchronization'
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'Cloud-based integrations that grow with your business needs'
    },
    {
      icon: Shield,
      title: 'Secure Connections',
      description: 'Enterprise-grade security with encryption and authentication protocols'
    }
  ];

  const integrationTypes = [
    {
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with popular gateways like Stripe, PayPal, and Square',
      icon: '💳'
    },
    {
      title: 'Social Media APIs',
      description: 'Connect with Facebook, Twitter, Instagram, and LinkedIn for seamless sharing',
      icon: '📱'
    },
    {
      title: 'CRM/ERP Systems',
      description: 'Integrate with Salesforce, HubSpot, SAP, and other business management tools',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Connect with Shopify, WooCommerce, Magento for inventory and order management',
      icon: '🛒'
    },
    {
      title: 'Communication APIs',
      description: 'SMS, email, and messaging integrations with Twilio, SendGrid, and Slack',
      icon: '💬'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Google Analytics, custom dashboards, and business intelligence tools',
      icon: '📊'
    }
  ];

  const process = [
    {
      title: 'Requirements Analysis',
      description: 'We analyze your current systems and identify integration opportunities'
    },
    {
      title: 'API Documentation Review',
      description: 'Thorough review of API specifications and technical requirements'
    },
    {
      title: 'Development & Testing',
      description: 'Custom integration development with comprehensive testing protocols'
    },
    {
      title: 'Security Implementation',
      description: 'Strong encryption, authentication, and data protection measures'
    },
    {
      title: 'Deployment & Monitoring',
      description: 'Seamless deployment with ongoing monitoring and maintenance'
    }
  ];

  const technologies = [
    'REST APIs', 'GraphQL', 'WebHooks', 'OAuth 2.0', 'JWT', 'SSL/TLS',
    'Node.js', 'Python', 'PHP', 'Java', 'Docker', 'AWS/Azure'
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
                API Integration
              </span>{' '}
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect Your Systems Easily and Securely with Professional API Integration Solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Discuss Your Integration Needs
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What is API Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">What is API Integration?</h2>
              <p className="text-gray-300 text-lg mb-6">
                API (Application Programming Interface) integration connects different software systems, 
                allowing them to communicate and share data seamlessly. This powerful technology enables 
                businesses to automate processes, eliminate manual data entry, and create more efficient workflows.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Whether you need to connect your website to a payment processor, sync customer data between 
                platforms, or automate social media posting, our API integration services make it possible 
                with robust, secure, and scalable solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <benefit.icon className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
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
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="API Integration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Integration Services We Offer</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive API integration solutions for all your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationTypes.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{integration.title}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Our Integration Process</h2>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Security & Reliability</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <Shield className="h-12 w-12 text-blue-400 mb-6" />
                <p className="text-gray-300 text-lg mb-6">
                  Data security is our top priority. We implement enterprise-grade security measures 
                  to protect your sensitive information during transmission and storage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">OAuth 2.0 authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">SSL/TLS security protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Regular security audits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">GDPR compliance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for robust integrations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your integration needs and streamline your business processes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Discuss Your Integration Needs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default APIIntegration;