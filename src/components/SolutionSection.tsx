import { motion } from "framer-motion";
import { Brain, Shield, Zap, Network } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze document patterns, fonts, seals, and signatures to detect sophisticated forgeries.",
      features: ["Deep Learning Models", "Pattern Recognition", "Anomaly Detection"]
    },
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Immutable ledger technology creates tamper-proof records of authentic credentials, ensuring long-term integrity.",
      features: ["Immutable Records", "Cryptographic Security", "Distributed Verification"]
    },
    {
      icon: Zap,
      title: "Instant Validation",
      description: "Real-time verification system provides immediate results, streamlining the credential verification process.",
      features: ["Sub-second Response", "API Integration", "24/7 Availability"]
    },
    {
      icon: Network,
      title: "Ecosystem Integration",
      description: "Seamless integration with universities, employers, and government systems for comprehensive verification network.",
      features: ["Multi-platform Support", "Standardized APIs", "Cross-institutional Data"]
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Revolutionary Solution
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Combining cutting-edge artificial intelligence with blockchain technology 
            to create an unbreachable verification system for academic credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-lg mb-6">
                <solution.icon className="w-8 h-8 text-accent-light" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-white/80">
                    <div className="w-1.5 h-1.5 bg-accent-light rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upload", desc: "Submit document for verification" },
              { step: "02", title: "Analyze", desc: "AI processes and examines credentials" },
              { step: "03", title: "Verify", desc: "Blockchain confirms authenticity" },
              { step: "04", title: "Validate", desc: "Instant results delivered" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;