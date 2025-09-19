import { motion } from "framer-motion";
import { Shield, Database, Plug, Zap, Check, Clock, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "Secure Document Verification",
      description: "Advanced cryptographic validation ensures the highest level of security for all document verification processes.",
      highlights: ["256-bit Encryption", "Multi-factor Authentication", "Secure Data Transmission"]
    },
    {
      icon: Database,
      title: "Blockchain-based Ledger for Academic Records",
      description: "Immutable blockchain technology creates a permanent, tamper-proof record of all academic credentials and their verification history.",
      highlights: ["Tamper-proof Records", "Distributed Storage", "Cryptographic Hashing"]
    },
    {
      icon: Plug,
      title: "Easy API Integration for Universities",
      description: "Seamless integration with existing university systems through RESTful APIs and comprehensive documentation.",
      highlights: ["RESTful APIs", "SDK Support", "Comprehensive Documentation"]
    },
    {
      icon: Zap,
      title: "Instant Authentication Results",
      description: "Real-time verification delivers immediate results, enabling fast decision-making for employers and institutions.",
      highlights: ["Sub-second Response", "Real-time Processing", "Instant Notifications"]
    }
  ];

  const additionalFeatures = [
    { icon: Check, text: "99.8% Accuracy Rate" },
    { icon: Clock, text: "24/7 Availability" },
    { icon: Globe, text: "Multi-language Support" },
    { icon: Lock, text: "GDPR Compliant" },
    { icon: Database, text: "Scalable Infrastructure" },
    { icon: Shield, text: "ISO 27001 Certified" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powerful Features for Complete Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides everything needed for reliable, 
            secure, and efficient academic credential verification.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border group"
            >
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-sm text-accent font-medium">
                        <Check className="w-4 h-4 mr-3 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-subtle rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Additional Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-primary">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Institution?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing network of institutions using our platform to maintain academic integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;